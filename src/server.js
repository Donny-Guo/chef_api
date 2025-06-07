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

app.get('/', (req, res) => {
  res.status(200).json({message: "the server is running"})
})

app.post('/api/claude', async (req, res) => {
  try {
    const {prompt} = req.body
    if (!prompt) {
      return res.status(400).json({"error": "prompt can not be empty"})
    }
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
    const response = msg.content[0].text
    if (!response) throw new Error("Get no response from Claude API")
    res.status(200).json({ response })

  } catch (error) {
    console.error("error getting claude response:", error)
    return res.status(500).json({error: "Internal Server Error"})
  }
})

app.listen(PORT, () => {
  console.log("Serving running at port:", PORT)
})
