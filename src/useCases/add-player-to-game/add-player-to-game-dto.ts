export interface IAddPlayerToGameDTO {
  playerId: number;
  gameId: number;
  name: string;
  currentTeam: 'WHITE' | 'GREEN';
  function: 'GOALKEEPER' | 'OUTFIELDPLAYER';
}
