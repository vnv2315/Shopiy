import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import subscribeRouter from './routes/subscribeRoute.js';
import orderRouter from './routes/orderRoute.js';

// App config
const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();
// Middlewares
app.use(cors());
app.use(express.json());

// api endpoint
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/subscribe',subscribeRouter)
app.use('/api/order',orderRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}/`);
});
