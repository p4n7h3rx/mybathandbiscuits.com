const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Path to the distribution folder
const distPath = path.resolve(__dirname, 'dist');

// Intensive logging for debugging 503
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Diagnostic route
app.get('/test-node', (req, res) => {
    res.json({
        status: 'Server is active',
        nodeVersion: process.version,
        time: new Date().toISOString(),
        dir: __dirname,
        distExists: fs.existsSync(distPath)
    });
});

app.get('/health', (req, res) => res.status(200).send('OK'));

// Serve static files (if dist exists)
if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
}

// Fallback for SPA
app.get('*', (req, res) => {
    const indexPath = path.join(distPath, 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(200).send(`
            <body style="background:#1a1a1a;color:#fff;font-family:sans-serif;text-align:center;padding-top:20vh;">
                <h1>Site is Building</h1>
                <p>Node.js is running, but the frontend build is not found at: ${distPath}</p>
                <p>Please run <code>npm run build</code></p>
            </body>
        `);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

process.on('uncaughtException', (err) => console.error('CRITICAL:', err));
process.on('unhandledRejection', (reason) => console.error('REJECTION:', reason));
