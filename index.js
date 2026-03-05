import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Serve static files from the 'dist' directory
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Handle SPA routing: serve index.html for all unknown routes
app.get('*', (req, res) => {
    const indexPath = path.join(distPath, 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        console.error(`Build artifact not found: ${indexPath}`);
        res.status(200).send(`
            <html>
                <body style="font-family: sans-serif; padding: 2rem; background: #1a1a1a; color: #fff; text-align: center; display: flex; flex-direction: column; justify-content: center; height: 100vh; margin: 0;">
                    <div style="border: 1px solid #333; padding: 3rem; border-radius: 1rem; background: #222; max-width: 500px; margin: auto;">
                        <h1 style="color: #646cff;">Server is Live</h1>
                        <p style="opacity: 0.8; line-height: 1.6;">Your Node.js environment is correctly configured and the server is running.</p>
                        <p style="color: #ffa500; font-weight: bold;">However, the build output (dist/) was not found.</p>
                        <p style="opacity: 0.6; font-size: 0.9rem;">Please ensure you have run <code>npm run build</code> on the server or uploaded the <code>dist</code> folder.</p>
                        <hr style="opacity: 0.1; margin: 2rem 0;">
                        <p style="opacity: 0.4; font-size: 0.7rem; letter-spacing: 0.1em; uppercase;">BATH & BISCUITS PRODUCTION SERVER</p>
                    </div>
                </body>
            </html>
        `);
    }
});

const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`===============================================`);
    console.log(`PRODUCTION SERVER STARTED`);
    console.log(`Timestamp : ${new Date().toISOString()}`);
    console.log(`Port      : ${PORT}`);
    console.log(`Dir       : ${__dirname}`);
    console.log(`Serving   : ${distPath}`);
    console.log(`===============================================`);
});

// Handle global errors that might crash the process
process.on('uncaughtException', (err) => {
    console.error('CRITICAL: Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('CRITICAL: Unhandled Rejection at:', promise, 'reason:', reason);
});

server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`ERROR: Port ${PORT} is already in use.`);
    } else {
        console.error('SERVER ERROR:', error);
    }
});
