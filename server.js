// server.js
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'build'); // change to 'build' if needed

// Serve static assets
app.use(express.static(DIST_DIR, { maxAge: '1d' }));

// Map known pages to their HTML files
// Replace these routes and filenames with your actual 7 pages
const pageMap = {
  '/': 'index.html',
  '/Home': 'index.html',
  '/About': 'about.html',
  '/Services': 'services.html',
  '/Contact': 'contact.html',
  '/Privacy': 'privacy.html',
  '/Terms': 'terms.html',
  '/Consult': 'consult.html'
};

// Serve the correct HTML for each route
app.get(Object.keys(pageMap), (req, res) => {
  const htmlFile = pageMap[req.path] || 'index.html';
  res.sendFile(path.join(DIST_DIR, htmlFile), err => {
    if (err) {
      res.status(500).send('Server error');
    }
  });
});

// Fallback: if you want unknown routes to return index.html (client routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
