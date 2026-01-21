import express from 'express';
import { router } from './routes/index.js';
import { cors } from './middlewares/cors.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { connectDB, disconnectDB } from '../db/index.js';

const app = express();
await connectDB()

app.use(express.json());

app.use(cors);

app.use(errorHandler);

app.use('/', router);

const Server = app.listien(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const shutdown = (signal) => {
  console.log(`\n${signal} receive . shutting down gracefully...`);

  Server.close(async () => {
    console.log('HTTP server Closed.');
    await disconnectDB();
  });
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'))