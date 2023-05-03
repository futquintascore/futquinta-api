import express from 'express';
import { config } from 'dotenv';
import playersRoute from './routes/player';
import gameRouter from './routes/game';
import statRoute from './routes/stats';
import cors from 'cors';
import userRoute from './routes/user';
import MOTMRoute from './routes/motm.routes';
import rankingsRoute from './routes/rankings.routes';

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
    // this.app.use(function (req, res, next) {
    //   setTimeout(next, 1500);
    // });
  }
  routes(): void {
    this.app.use('/v1/games', gameRouter);
    this.app.use('/v1/players', playersRoute);
    this.app.use('/v1/stats', statRoute);
    this.app.use('/v1/users', userRoute);
    this.app.use('/v1/motm', MOTMRoute);
    this.app.use('/v1/rankings', rankingsRoute);
  }
}
export default new App().app;
