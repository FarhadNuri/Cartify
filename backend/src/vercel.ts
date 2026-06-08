import express from 'express';
import {ENV} from './config/db.config';
import { clerkMiddleware } from '@clerk/express'
import path from 'path';
import cors from 'cors';
import userRoutes from './routes/user.route';
import productRoutes from './routes/product.route';
import commentRoutes from './routes/comment.route';

const app = express();

app.use(cors({
  origin: ENV.FRONTEND_URL || '*', 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(clerkMiddleware())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users",userRoutes)
app.use("/api/products",productRoutes)
app.use("/api/comments",commentRoutes)

app.get('/api', (req, res) => {
  res.json({ 
    message: 'API is running',
    environment: ENV.NODE_ENV,
    endpoints: {
      users: '/api/users',
      products: '/api/products',
      comments: '/api/comments'
    }
  });
});

export default app;
