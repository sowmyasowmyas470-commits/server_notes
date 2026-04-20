import express from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import connectDB from './data_base/connection.js';
dotenv.config();
const app = express();

app.use(express.json());

const PORT = 8080;
app.get("/", (req, res) => {
  res.status(200).json({message: "Hello, World"});
});

app.get("/greet/:name", (req, res) => {
  const name  = req.params.name;
  res.status(200).json({ message: `Hello, ${name}!` });
});

//app.listen(port-number,function)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});