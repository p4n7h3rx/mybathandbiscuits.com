import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, 'dist');

const app = express();
const PORT = process.env.PORT || 3000;

// Intensive logging for debugging 503
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Direct test route to verify server is active
app.get('/test-503', (req, res) => {
    res.json({
        status: 'Server is reachable',
        nodeVersion: process.version,
        time: new Date().toISOString(),
        env: process.env.NODE_ENV || 'not set',
        dir: __dirname,
        distExists: fs.existsSync(distPath)
    });
});

app.get('/health', (req, res) => res.status(200).send('OK'));

// Serve static files
app.use(express.static(distPath));

// Manual check for dist/index.html to ensure file existence
app.get('*', (req, res) => {
    const indexPath = path.join(distPath, 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        console.error(`CRITICAL: dist/index.html not found at ${indexPath}`);
        res.status(500).send('Production build missing. Please run build.');
    }
});

const server = app.listen(PORT, () => {
    console.log('====================================');
    console.log('BATH & BISCUITS SERVER NODE.JS');
    console.log(`Listening on Port: ${PORT}`);
    console.log(`Serving Assets: ${distPath}`);
    console.log('====================================');
});

// Process-level error handling
process.on('uncaughtException', (err) => console.error('UNCAUGHT EXCEPTION:', err));
process.on('unhandledRejection', (reason) => console.error('UNHANDLED REJECTION:', reason));
server.on('error', (err) => console.error('SERVER ERROR:', err));
