const fs = require('fs');
const path = require('path');

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method not allowed' });
    return;
  }

  try {
    const { contactedTeachers } = req.body;

    if (!Array.isArray(contactedTeachers)) {
      res.status(400).json({ success: false, error: 'Invalid data' });
      return;
    }

    // Path to the contacted.json file
    const filePath = path.join(process.cwd(), 'json', 'contacted.json');
    const data = { contactedTeachers };

    // Write to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving progress:', error);
    res.status(500).json({ success: false, error: 'Failed to save progress' });
  }
}
