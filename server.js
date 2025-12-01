const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Disable caching for development
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

// Serve static files from the current directory
app.use(express.static(__dirname, { etag: false, lastModified: false }));

// Serve index.html for all routes (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Hats app server running at http://localhost:${PORT}`);
});

