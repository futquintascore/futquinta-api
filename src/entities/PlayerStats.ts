export class PlayerStats {
  id?: number;
  goals?: number;
  assists?: number;
  substituition?: number;
  name: string;
  playerId: number;
  gameId: number | null;
  function: 'GOALKEEPER' | 'OUTFIELDPLAYER';
  createdAt?: Date;
  updatedAt?: Date;
  currentTeam: 'WHITE' | 'GREEN';
  goalsConceded: number | null;
  constructor({
    name,
    playerId,
    currentTeam,
    gameId,
    function: playerFunction,
    goalsConceded,
  }: PlayerStats) {
    this.currentTeam = currentTeam;
    this.name = name;
    this.playerId = playerId;
    this.gameId = gameId;
    this.function = playerFunction;
    this.goalsConceded = goalsConceded;
  }
}
