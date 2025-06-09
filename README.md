# 🍳 AI Chef - Backend API

The Express.js backend server for AI Chef, a smart web application that generates optimized recipes based on available ingredients. This API handles recipe generation using AI integration to provide time-efficient cooking instructions.

## 🔗 Related Repository

- **Frontend**: [AI Chef React App](https://github.com/Donny-Guo/AI_Chef)

## ✨ Features

- **Recipe Generation API**: Processes ingredient lists and generates optimized recipes
- **AI Integration**: Connects with AI services to create intelligent cooking instructions
- **RESTful API Design**: Clean and intuitive API endpoints
- **CORS Support**: Configured for cross-origin requests from the frontend
- **Error Handling**: Comprehensive error handling and validation

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm
- API keys for AI services (OpenAI, Anthropic, etc.)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Donny-Guo/chef_api.git
cd chef_api
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
PORT=5000
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

5. Start the development server:
```bash
npm start
# or for development with auto-reload
npm run dev
```

The server will start on `http://localhost:5000` (or your configured port).

## 📡 API Endpoints

### Recipe Generation

```http
POST /api/claude
```

**Request Body:**
```json
{
  "ingredients": ["chicken breast", "rice", "vegetables"]
}
```

**Response:**
```json
{
  "recipe": "# Quick Chicken and Rice Bowl\n\n## Ingredients\n- 1 chicken breast\n- 1 cup rice\n- Mixed vegetables\n\n## Instructions\n1. Cook rice according to package directions..."
}
```

### Health Check

```http
GET /api/health
```

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## 🛠️ Built With

- **Express.js** - Web framework for Node.js
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **AI Service Integration** - OpenAI/Anthropic APIs for recipe generation

## 🔧 Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon (if configured)
- `npm test` - Run test suite (if configured)

## 📁 Project Structure

```
chef_api/
├── src/
│   ├── config/
│   │   └── cron.js          # Scheduled tasks configuration
│   └── server.js            # Main server file
├── .env                     # Environment variables
├── .env.example             # Environment variables template
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## 🌍 Environment Variables

| Variable            | Description       | Required | Default |
| ------------------- | ----------------- | -------- | ------- |
| `PORT`              | Server port       | Yes      | 5000    |
| `OPENAI_API_KEY`    | OpenAI API key    | Yes*     | -       |
| `ANTHROPIC_API_KEY` | Anthropic API key | Yes*     | -       |

*At least one AI API key is required

## 🚀 Deployment

### Local Development
1. Set environment variables in `.env`
2. Run `npm install`
3. Run `npm start`

### Production Deployment
The API can be deployed to platforms like:
- **Heroku**: Connect repository and set environment variables
- **Railway**: Deploy directly from GitHub
- **Vercel**: For serverless deployment
- **DigitalOcean App Platform**: Container-based deployment

## 🔒 Security

- Environment variables for sensitive API keys
- CORS configuration for secure cross-origin requests
- Input validation and sanitization for recipe generation requests

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/Donny-Guo/chef_api/issues) on GitHub.

---

Made with ❤️ for efficient cooking experiences