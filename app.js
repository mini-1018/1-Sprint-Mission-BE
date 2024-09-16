import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import articleRoutes from './routes/articles.js';
import productRoutes from './routes/products.js';
import articleCommentRoutes from './routes/articleComments.js';
import productCommentRoutes from './routes/productComments.js';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  })
);

app.use('/articles', articleRoutes);
app.use('/articles/:articleId/comments', articleCommentRoutes);
app.use('/products', productRoutes);
app.use('/products/:productId/comments', productCommentRoutes);

app.listen(process.env.PORT || 3000, () => console.log('Server Started'));
