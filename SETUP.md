# Setup Instructions for Multi-User Sync

## Option 1: Using JSONBin.io (Recommended - Free & Easy)

1. Go to https://jsonbin.io/
2. Sign up for a free account
3. Click "Create Bin"
4. Paste this initial data:
```json
{
  "contactedTeachers": []
}
```
5. Click "Create"
6. Copy the Bin ID (looks like: `673d1234abcd5678ef901234`)
7. Go to "API Keys" tab and copy your API key
8. In `index.html`, replace:
   - `YOUR_BIN_ID` with your actual Bin ID
   - `YOUR_API_KEY` with your actual API key

Now all 3 users will sync in real-time through JSONBin!

## Option 2: Keep localStorage Only

If you don't need multi-user sync:
- Leave the IDs as `YOUR_BIN_ID` 
- The app will work with localStorage (per-user storage)
- Use the Export/Import buttons to share progress

## Deployment

The app is already configured for Vercel. Just push changes:

```bash
git add .
git commit -m "Update to JSONBin sync"
git push
```

Vercel will auto-deploy in ~30 seconds.
