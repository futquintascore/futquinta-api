import express from 'express';
import { config } from 'dotenv';
import playersRoute from './routes/player';
import gameRouter from './routes/game';
import cors from 'cors';

config();

class App {
  public app;

  constructor() {
    this.app = express();
    this.middlwares();
    this.routes();
  }

  middlwares(): void {
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
  routes(): void {
    this.app.use('/v1/games', gameRouter);
    this.app.use('/v1/players', playersRoute);
  }
}
export default new App().app;
