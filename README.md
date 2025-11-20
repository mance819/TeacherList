# Teacher Course Tracker

A web application to track teacher outreach for online courses across multiple categories.

## Features

- Browse courses by category (Design, Game Development, Photography, Web Development)
- Track contacted teachers
- Filter by contacted/not-contacted status
- Sort by reviews, subscribers, or date
- Multi-user support with server-side syncing
- English courses only

## Deployment

### Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Import Project" and select this repository
4. Click "Deploy"

That's it! Vercel will automatically detect the configuration and deploy your app.

## Local Development

Simply open `index.html` in a web browser through a local server.

## Categories

- Design
- Design (New People)
- Game Development
- Photography
- Web Dev (Mid-Big)
- Web Dev (New People)

## Data Files

All course data is stored in JSON files in the `json/` folder.
Progress tracking is saved in `json/contacted.json`.
