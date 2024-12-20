import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './api/v1/routes/userRoutes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware for parsing JSON request body
app.use(express.json());

// Routes
app.use('/api/v1/users', userRoutes);

// Error handling middleware should be last
app.use(errorMiddleware);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));

export default app;