import { MOTM } from '../../entities/MOTM';
import { MOTMModel } from '../../services/prismaClient';
import { IMOTMRespository } from './../IMOTMRepository';
export class PrismaMOTMRepository implements IMOTMRespository {
  async save({ team, playerProfileId, gameId }: MOTM): Promise<MOTM> {
    try {
      const newMOTM = await MOTMModel.create({
        data: {
          player: {
            connect: {
              id: playerProfileId,
            },
          },
          Game: {
            connect: {
              id: gameId,
            },
          },
          team: team,
        },
        include: {
          player: true,
          Game: true,
        },
      });
      return {
        ...newMOTM,
        gameId,
      };
    } catch (err: any) {
      console.log(err);
      return err.message;
    }
  }
}
