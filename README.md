# 🚀 Job Application Assistant

An automated job application tool that helps you find, match, and apply to relevant job postings efficiently.

## Features

- **📄 CV Parsing**: Upload your CV (PDF) for automatic skill extraction
- **🔍 Multi-Platform Search**: Search across LinkedIn, Indeed, Glassdoor, and Stack Overflow Jobs
- **🎯 Smart Matching**: AI-powered matching between your CV and job requirements
- **📧 Auto-Email**: Customize and send application emails to recruiters
- **📊 GitHub Tracking**: Automatically track all applications in this repository
- **💼 Application History**: Maintain a complete record of your job applications

## How to Use

### 1. Upload Your CV
- Click on "Select your CV" and upload a PDF version of your resume
- The system will parse your skills, experience, and education

### 2. Configure Your Search
- **Keywords**: Enter job titles or skills you're looking for (e.g., "software engineer, node.js")
- **Location**: Specify your preferred location or "Remote"
- **Platforms**: Select which job platforms to search

### 3. Customize Email Template
- Personalize the application email template
- Use placeholders:
  - `{jobTitle}` - Position title
  - `{company}` - Company name
  - `{skills}` - Your skills from CV
  - `{yourName}` - Your name

### 4. Start the Search
- Click "Find & Apply to Jobs"
- The tool will:
  1. Search all selected platforms
  2. Match jobs to your CV
  3. Send application emails
  4. Track applications in GitHub

## Application Tracking

All applications are automatically tracked in this repository:
- **applications/** - JSON files with application details
- **emails/** - Sent email templates
- **matches/** - CV matching scores and analysis

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Design**: Perplexity Design System
- **Integration**: GitHub API for tracking
- **CV Parsing**: PDF.js (client-side)
- **Email**: SMTP integration

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/islamoc/job-application.git
cd job-application
```

2. Open `index.html` in your browser:
```bash
open index.html
```

3. Or serve with a local server:
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

## Configuration

### Environment Variables (Optional)

Create a `.env` file for advanced features:

```env
GITHUB_TOKEN=your_github_personal_access_token
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### GitHub Integration

To enable automatic commit pushes:

1. Generate a GitHub Personal Access Token with `repo` scope
2. Add it to your environment variables
3. The tool will automatically create commits for each application

## Application Structure

```
job-application/
├── index.html          # Main application
├── README.md           # This file
├── .gitignore         # Git ignore rules
├── applications/      # Application records (auto-generated)
│   └── YYYY-MM-DD/   # Date-based folders
├── emails/           # Email templates sent
└── matches/          # CV matching analysis
```

## Features Roadmap

- [ ] Real CV PDF parsing with PDF.js
- [ ] LinkedIn API integration
- [ ] Indeed job scraping
- [ ] Glassdoor integration
- [ ] Stack Overflow Jobs API
- [ ] Email sending via SMTP
- [ ] Advanced CV-job matching algorithms
- [ ] Application analytics dashboard
- [ ] Interview tracking
- [ ] Follow-up reminders

## Privacy & Security

- All CV parsing is done client-side (your data never leaves your browser)
- GitHub repository is private by default
- Email credentials are stored securely
- No third-party tracking or analytics

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this tool for your job search!

## Author

**Islam Oc**
- GitHub: [@islamoc](https://github.com/islamoc)
- Repository: [job-application](https://github.com/islamoc/job-application)

## Acknowledgments

- Design system inspired by Perplexity AI
- Built with modern web standards
- Open source and free to use

---

**Good luck with your job search! 🍀**