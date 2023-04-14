import { getPlayerStats } from './getPlayerStats';
import { PlayerProfileWithStats } from './../../index.d';

export function getGeneralRanking(players: PlayerProfileWithStats[]) {
  const playersGeneralRanking = players
    .filter((player) => player.role === 'PERMANENT')
    .map((player) => {
      const stats = getPlayerStats(player);
      const { id, name, slug } = player;
      return {
        id,
        name,
        slug,
        ...stats,
      };
    })
    .sort((a, b) => (a.points > b.points ? -1 : 1))
    .sort((a, b) => {
      if (a.points === b.points && a.gamesRecord > b.gamesRecord) return -1;
      return 1;
    })
    .sort((a, b) => {
      if (
        a.points === b.points &&
        a.gamesRecord === b.gamesRecord &&
        a.totalGames > b.totalGames
      )
        return -1;
      return 1;
    })
    .sort((a, b) => {
      if (
        a.points === b.points &&
        a.gamesRecord === b.gamesRecord &&
        a.totalGames === b.totalGames &&
        a.name < b.name
      )
        return -1;
      return 1;
    });

  return playersGeneralRanking.map((player, index) => {
    return {
      ...player,
      position: `${index + 1}°`,
    };
  });
}
