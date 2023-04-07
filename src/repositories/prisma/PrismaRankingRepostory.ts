import { getGeneralRanking } from '../../functions/getGeneralRank';
import { PlayersProfile } from '../../services/prismaClient';
import { IRankingsRepository } from './../IRankingsRepository';

export class PrismaRankingRepository implements IRankingsRepository {
  async getRanking() {
    try {
      const allPlayers = await PlayersProfile.findMany({
        include: {
          Stats: {
            include: {
              player: true,
              Game: true,
            },
          },
          MOTM: true,
        },
      });
      const rank = getGeneralRanking(allPlayers).map(
        ({ position, name, points, slug, totalGames, draws, gamesRecord }) => {
          return {
            position,
            name,
            slug,
            points,
            totalGames,
            draws,
            gamesRecord,
          };
        }
      );
      return rank;
    } catch (err: any) {
      return err.message;
    }
  }
}
