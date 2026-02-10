import express from 'express';
import {ENV} from './config/db.config';
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors';

const app = express();
app.use(cors({origin: ENV.FRONTEND_URL}));
app.use(clerkMiddleware())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.listen(ENV.PORT, () => {
  console.log("Server is running on port", ENV.PORT);
});