import express from 'express';
import {ENV} from './config/db.config';
import { clerkMiddleware } from '@clerk/express'
import path from 'path';
import cors from 'cors';
import userRoutes from './routes/user.route';
import productRoutes from './routes/product.route';
import commentRoutes from './routes/comment.route';

const app = express();
app.use(cors({origin: ENV.FRONTEND_URL, credentials: true}));
// credentials: true allows cookies to be sent in cross-origin requests, which is necessary for authentication with Clerk when the frontend and backend are on different domains or ports.
app.use(clerkMiddleware())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users",userRoutes)
app.use("/api/products",productRoutes)
app.use("/api/comments",commentRoutes)

if (ENV.NODE_ENV === "production") {
  // When running from backend/dist/index.js, go up one level to project root
  const __dirname = path.resolve();

  // serve static files from frontend/dist
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // handle SPA routing - send all non-API routes to index.html - react app
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
} else {
  // Development API info endpoint
  app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' ,
      endpoints: {
          users: '/api/users',
          products: '/api/products',
          orders: '/api/orders',
          comments: '/api/comments'
      }
    });
  });
}

app.listen(ENV.PORT, () => {
  console.log("Server is running on port", ENV.PORT);
});