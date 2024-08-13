import { PlayerProfileWithStats } from '../../../index';
import { GoalkeepersRanking } from '../../entities/GeneralRanking';
import { RecordRanking } from '../../entities/RecordRanking';
import { getGeneralRanking } from '../../functions/getGeneralRank';
import { getPlayerStats } from '../../functions/getPlayerStats';
import { PlayersProfile, prisma } from '../../services/prismaClient';
import { IRankingsRepository } from './../IRankingsRepository';

export class PrismaRankingRepository implements IRankingsRepository {
  // playerId: number;
  // name: string;
  // goalsConceded: string;
  // games: string;
  async getRecordRanking(): Promise<RecordRanking[]> {
    try {
      const allPlayers = await PlayersProfile.findMany({
        where:{
          role:"PERMANENT",
          
        },

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
      const totalNumberOfGames = await prisma.game.count();

      const percentual = 0.4;
      const fortyPerCentGames = totalNumberOfGames * percentual;

      const playerStats = allPlayersConverted
        .map((player) => {
          const { gamesRecord, totalGames } = getPlayerStats(player);
          return {
            id: player.id,
            name: player.name,
            slug: player.slug,
            record: gamesRecord || 0.0,
            games: totalGames,
            picture:
              player.currentPicture === 'WHITE'
                ? player.whiteShirtpicture
                : player.greenShirtpicture,
          };
        })
        .filter((player) => player.games >= fortyPerCentGames)
        .sort((a, b) => (a.record < b.record ? 1 : -1))
        .sort((a, b) => {
          if (a.record === b.record && a.games > b.games) {
            return -1;
          }
          return 1;
        });

      return playerStats as unknown as RecordRanking[];
    } catch (err: any) {
      return err.message;
    }
  }
  async getGoalkeepersRanking(): Promise<GoalkeepersRanking[]> {
    try {
      const [allGoalkeepers, totalGames] = await Promise.all([
        PlayersProfile.findMany({
          where: {
            function: 'GOALKEEPER',
          },
          include: {
            Stats: {
              where: {
                function: 'GOALKEEPER',
              },
            },
          },
        }),
        prisma.game.count(),
      ]);
      const thirtySixPerCentGames = +((totalGames * 36) / 100).toFixed(0);
      // const goalkeepersWithThirtySixPerCentGames = allGoalkeepers.filter(
      //   (player) => player.Stats.length >= thirtySixPerCentGames
      // );

      const goalkeepersRanking: GoalkeepersRanking[] = allGoalkeepers.map((player) => {
        const { id, name, goalsConceded } = player;
        const games = player.Stats.length;

        return {
          playerId: id,
          games: games,
          goalsConceded: goalsConceded || 0,
          averageGoalsPerGame: +((goalsConceded || 0) / games).toFixed(2),
          name,
        };
      });

      return goalkeepersRanking.filter((gk)=>gk.name !== 'Rafael');
    } catch (err: any) {
      console.log(err);
    }

    throw new Error('Method not implemented yet.');
  }
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
