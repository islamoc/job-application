const express = require('express');
const cors = require('cors');
const axios = require('axios');
const sgMail = require('@sendgrid/mail');
const { Octokit } = require('@octokit/rest');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// API endpoints for job sources
const JOB_APIS = {
  remoteok: 'https://remoteok.com/api',
  arbeitnow: 'https://www.arbeitnow.com/api/job-board-api',
  remotive: 'https://remotive.com/api/remote-jobs'
};

// Search jobs across multiple APIs
app.post('/api/search-jobs', async (req, res) => {
  const { keywords, location, jobType, minMatch } = req.body;
  
  try {
    const results = await Promise.allSettled([
      fetchRemoteOKJobs(keywords),
      fetchArbeitnowJobs(keywords),
      fetchRemotiveJobs(keywords)
    ]);

    const allJobs = results
      .filter(r => r.status === 'fulfilled')
      .flatMap(r => r.value)
      .map(job => ({
        ...job,
        matchScore: calculateMatchScore(job, keywords)
      }))
      .filter(job => job.matchScore >= (minMatch || 80))
      .sort((a, b) => b.matchScore - a.matchScore);

    res.json({ success: true, jobs: allJobs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

async function fetchRemoteOKJobs(keywords) {
  try {
    const response = await axios.get(JOB_APIS.remoteok);
    const jobs = response.data.slice(1, 50); // Skip first item (metadata)
    
    return jobs.map(job => ({
      id: job.id,
      title: job.position,
      company: job.company,
      location: job.location || 'Remote',
      description: job.description,
      url: job.url,
      tags: job.tags || [],
      source: 'RemoteOK'
    }));
  } catch (error) {
    console.error('RemoteOK API error:', error.message);
    return [];
  }
}

async function fetchArbeitnowJobs(keywords) {
  try {
    const response = await axios.get(JOB_APIS.arbeitnow);
    const jobs = response.data.data || [];
    
    return jobs.map(job => ({
      id: job.slug,
      title: job.title,
      company: job.company_name,
      location: job.location,
      description: job.description,
      url: job.url,
      tags: job.tags || [],
      source: 'Arbeitnow'
    }));
  } catch (error) {
    console.error('Arbeitnow API error:', error.message);
    return [];
  }
}

async function fetchRemotiveJobs(keywords) {
  try {
    const response = await axios.get(JOB_APIS.remotive);
    const jobs = response.data.jobs || [];
    
    return jobs.map(job => ({
      id: job.id,
      title: job.title,
      company: job.company_name,
      location: job.candidate_required_location,
      description: job.description,
      url: job.url,
      tags: job.tags || [],
      source: 'Remotive'
    }));
  } catch (error) {
    console.error('Remotive API error:', error.message);
    return [];
  }
}

function calculateMatchScore(job, keywords) {
  const keywordList = keywords.toLowerCase().split(',').map(k => k.trim());
  const jobText = `${job.title} ${job.description} ${job.tags.join(' ')}`.toLowerCase();
  
  let matches = 0;
  keywordList.forEach(keyword => {
    if (jobText.includes(keyword)) matches++;
  });
  
  return Math.min(Math.round((matches / keywordList.length) * 100), 100);
}

// Send application email
app.post('/api/apply', async (req, res) => {
  const { job, emailContent, apiKey } = req.body;
  
  sgMail.setApiKey(apiKey || process.env.SENDGRID_API_KEY);
  
  const msg = {
    to: job.recruiterEmail || 'hiring@example.com',
    from: 'azeddine.mennouchi@owasp.org',
    subject: `Application for ${job.title} Position`,
    text: emailContent,
    html: emailContent.replace(/\n/g, '<br>')
  };

  try {
    await sgMail.send(msg);
    res.json({ success: true, message: 'Application sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Push to GitHub
app.post('/api/github-push', async (req, res) => {
  const { repo, token, applications } = req.body;
  
  const octokit = new Octokit({ auth: token });
  const [owner, repoName] = repo.split('/');

  try {
    const content = {
      applications: applications,
      timestamp: new Date().toISOString(),
      totalApplications: applications.length
    };

    const fileContent = Buffer.from(JSON.stringify(content, null, 2)).toString('base64');

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo: repoName,
      path: 'applications.json',
      message: `Update applications - ${applications.length} total`,
      content: fileContent,
      branch: 'main'
    });

    res.json({ success: true, message: 'Pushed to GitHub successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Job Application Server running on port ${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}`);
});