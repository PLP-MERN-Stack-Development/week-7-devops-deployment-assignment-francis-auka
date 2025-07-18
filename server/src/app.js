// src/app.js
import express from 'express';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

export default app;
