import express from 'express';
import { config } from 'dotenv';
import homeRoute from './routes/home';
import playersRoute from './routes/player';

config();

const app = express();
const port = process.env.PORT || 3001;

//Middleares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Routes
app.use('/', homeRoute);
app.use('/players', playersRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
