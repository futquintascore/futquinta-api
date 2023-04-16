import { PlayerProfileWithStats } from '../../../index';
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
      const allPlayersConverted = allPlayers as unknown as PlayerProfileWithStats[];
      const rank = getGeneralRanking(allPlayersConverted).map(
        ({
          position,
          name,
          points,
          slug,
          totalGames,
          draws,
          gamesRecord,
          whiteShirtpicture,
          greenShirtpicture,
          currentPicture,
        }) => {
          return {
            position,
            name,
            slug,
            points,
            totalGames,
            draws,
            gamesRecord,
            picture: currentPicture === 'WHITE' ? whiteShirtpicture : greenShirtpicture,
          };
        }
      );
      return rank;
    } catch (err: any) {
      return err.message;
    }
  }
}
