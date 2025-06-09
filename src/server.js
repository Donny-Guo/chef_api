import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import Anthropic from '@anthropic-ai/sdk'
import job from './config/cron.js'

if (process.env.NODE_ENV == "production") job.start()

const PORT = process.env.PORT
const anthropic = new Anthropic()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.status(200).json({
    "status": "OK",
    "timestamp": new Date().toISOString(),
  })
})

app.post('/api/claude', async (req, res) => {
  try {
    const {ingredients} = req.body
    if (!ingredients) {
      return res.status(400).json({ "error": "ingredients can not be empty"})
    }
    const ingredientList = ingredients.join(", ")

    const prompt = `Give me a recipe with detail instructions based on the following ingredients: ${ingredientList}. Make sure this recipe can be easily picked up by anyone without using oven or stir-fry and finish in 20 minutes. Your response must be in markdown format and should start with: Here's a delicious recipe for.`

    // console.log("prompt:", prompt)
    
    const msg = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1024,
      temperature: 1,
      system: "You are a world-class chef.",
      messages: [
        {
          role: "user",
          content: [
            {
              type: 'text',
              text: prompt,
            }
          ]
        }
      ]
    })
    const recipe = msg.content[0].text
    if (!recipe) throw new Error("Get no response from Claude API")
    res.status(200).json({ recipe })
  } catch (error) {
    console.error("error getting claude response:", error)
    return res.status(500).json({error: "Internal Server Error"})
  }
})

app.listen(PORT, () => {
  console.log("Serving running at port:", PORT)
})
