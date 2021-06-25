import express from 'express';
import { createConnection } from 'typeorm';
import router from './routes/product.routes';

const app = express();
createConnection();

// Middlewares
app.use(express.json());


// routes
app.use("/products", router);

app.listen(3000);
console.log('Server on port', 3000);
