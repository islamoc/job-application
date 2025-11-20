# 🚀 Job Application Automation System

Full-stack automated job search and application system with real-time API integrations, intelligent job matching, and comprehensive application tracking.

## ✨ Features

### Core Functionality
- **🔍 Multi-API Job Search**: Real-time search across RemoteOK, Arbeitnow, and Remotive APIs
- **🤖 AI-Powered Matching**: Smart job matching based on your CV skills with compatibility scores
- **📧 Automated Applications**: One-click email applications via SendGrid integration
- **🐙 GitHub Integration**: Automatic tracking of all applications in your repository
- **📊 Real-Time Analytics**: Dashboard with job statistics and application tracking
- **🎯 CV Profile Analysis**: Automatic skill extraction and profile summary
- **⚙️ Customizable Email Templates**: Personalized application emails with dynamic placeholders

### Technical Features
- **⚡ Fast Node.js Backend**: Express server with REST API endpoints
- **💻 Modern Frontend**: Responsive single-page application with dark mode support
- **🔒 Secure API Management**: Environment-based configuration for API keys
- **🔄 Real-Time Updates**: Live job search results and application status
- **📱 Mobile Responsive**: Works seamlessly on all devices

## 🛠️ Tech Stack

### Frontend
- **HTML5/CSS3/JavaScript**: Pure vanilla JS, no framework dependencies
- **Design System**: Custom design tokens with light/dark mode
- **Responsive Layout**: CSS Grid and Flexbox

### Backend
- **Node.js**: Runtime environment
- **Express**: Web framework
- **Axios**: HTTP client for API requests
- **CORS**: Cross-origin resource sharing

### Integrations
- **RemoteOK API**: Remote job listings
- **Arbeitnow API**: European job market
- **Remotive API**: Remote work opportunities
- **SendGrid**: Email delivery service
- **GitHub API**: Application tracking via Octokit

### Data Storage
- **JSON Files**: Application tracking and history
- **Environment Variables**: Secure API key management

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Git
- (Optional) SendGrid account for email features
- (Optional) GitHub Personal Access Token for push features

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/islamoc/job-application.git
cd job-application
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
# Edit .env with your API keys
```

4. **Start the server**
```bash
npm start
```

5. **Access the application**
```
Open http://localhost:3000 in your browser
```

### Development Mode

```bash
npm run dev
```
This uses nodemon for auto-restart on file changes.

## 🔑 API Keys Setup

### Free APIs (No Key Required)
- **RemoteOK**: Public API, no authentication
- **Arbeitnow**: Public API, no authentication
- **Remotive**: Public API, no authentication

### Optional APIs (Enhanced Features)

#### SendGrid (Email Applications)
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Free tier: 100 emails/day
3. Create an API key
4. Add to `.env`: `SENDGRID_API_KEY=your_key_here`

#### GitHub (Application Tracking)
1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Generate new token (classic)
3. Select `repo` scope
4. Add to `.env`: `GITHUB_TOKEN=your_token_here`

#### RapidAPI (Premium Job Sources)
1. Sign up at [rapidapi.com](https://rapidapi.com)
2. Subscribe to job API services
3. Add to `.env`: `RAPIDAPI_KEY=your_key_here`

## 📚 Application Structure

```
job-application/
├── index.html          # Frontend single-page application
├── server.js           # Node.js Express backend
├── package.json        # Dependencies and scripts
├── .env.example        # Environment template
├── .env                # Your API keys (git-ignored)
├── .gitignore         # Git ignore rules
├── README.md           # This file
├── applications.json   # Application tracking (auto-generated)
└── node_modules/       # Dependencies
```

## 🎯 Usage Guide

### 1. Dashboard
- View overall statistics
- Check API integration status
- Review CV profile summary

### 2. Job Search
- **Configure Filters**:
  - Keywords: "application security, penetration testing"
  - Location: Spain, Barcelona, Canada, or Remote
  - Job Type: Full-time, Contract, or Remote
  - Min Match %: Set compatibility threshold (default 80%)

- **Search Process**:
  - Click "Search Jobs"
  - System queries multiple APIs simultaneously
  - Results ranked by match score
  - View job details, tags, and source

### 3. Applications
- **Customize Email Template**:
  - Use placeholders: `{job_title}`, `{company}`, `{location}`
  - Save template for future applications

- **Apply to Jobs**:
  - One-click application from search results
  - Automatic email generation
  - Instant application tracking

### 4. API Configuration
- Enter API keys securely
- Keys stored in browser localStorage
- View API documentation and free tier limits

### 5. Backend Code
- Download server files
- View implementation details
- Copy code blocks for customization

### 6. GitHub Deploy
- Step-by-step deployment guide
- Cloud hosting options
- README and documentation

## ☁️ Cloud Deployment

### Heroku
```bash
heroku create job-application-bot
heroku config:set SENDGRID_API_KEY=your_key
heroku config:set GITHUB_TOKEN=your_token
git push heroku main
```

### Render
1. Connect GitHub repository
2. Set environment variables
3. Deploy with one click

### Railway
1. Import from GitHub
2. Configure environment
3. Auto-deploy on push

## 🔒 Security & Privacy

- **Client-Side CV Parsing**: Your CV data never leaves your browser
- **Secure API Keys**: Stored in environment variables, never committed to Git
- **HTTPS Only**: All API communications use secure protocols
- **No Data Collection**: No tracking or analytics
- **Private Repository**: Keep your application history confidential

## 🧑‍💻 Author

**Islam Azeddine Mennouchi**
- **Role**: Lead Security Specialist / Application Security Engineer
- **Email**: azeddine.mennouchi@owasp.org
- **Location**: Barcelona, Spain
- **GitHub**: [@islamoc](https://github.com/islamoc)
- **LinkedIn**: [linkedin.com/in/islamoc](https://linkedin.com/in/islamoc)
- **Portfolio**: [my.visualcv.com/islam-azeddine-mennouchi](https://my.visualcv.com/islam-azeddine-mennouchi/)

### Expertise
- Application Security Engineering
- Penetration Testing
- Cloud Security (AWS)
- Threat Modeling
- Security Awareness Training
- DevSecOps
- Python, PHP, JavaScript

## 📝 License

MIT License - Copyright (c) 2025 Islam Azeddine Mennouchi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 🐛 Known Issues & Roadmap

### Known Issues
- Some job APIs may rate-limit requests
- Email delivery requires SendGrid configuration
- GitHub push requires personal access token

### Roadmap
- [ ] Real PDF parsing with pdf-parse library
- [ ] Advanced filtering (salary, experience level)
- [ ] Interview scheduling integration
- [ ] Follow-up reminder system
- [ ] Application status tracking
- [ ] Cover letter generator
- [ ] LinkedIn Easy Apply integration
- [ ] Indeed API integration
- [ ] Glassdoor API integration
- [ ] Database support (MongoDB/PostgreSQL)
- [ ] User authentication
- [ ] Multi-user support
- [ ] Mobile app (React Native)

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Change port in .env
PORT=3001
```

### API Rate Limiting
- Add delays between requests
- Use multiple API keys
- Implement request queuing

### Email Not Sending
- Verify SendGrid API key
- Check email quota (100/day free)
- Review SendGrid dashboard for errors

### GitHub Push Failing
- Verify token has `repo` scope
- Check repository permissions
- Ensure branch name is correct

## 📚 Resources

- [RemoteOK API Docs](https://remoteok.com/api)
- [Arbeitnow API Docs](https://www.arbeitnow.com/api/job-board-api)
- [Remotive API Docs](https://remotive.com/api/remote-jobs)
- [SendGrid Docs](https://docs.sendgrid.com)
- [Octokit/GitHub API](https://github.com/octokit/rest.js)
- [Express.js Guide](https://expressjs.com)

## ⭐ Acknowledgments

- Design inspired by Perplexity AI
- Built with modern web standards
- Open source and free to use
- Community-driven development

---

**Good luck with your job search! 🍀**

If this tool helps you land a job, consider starring the repository and sharing it with others!