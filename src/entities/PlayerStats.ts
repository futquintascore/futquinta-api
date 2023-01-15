export class PlayerStats {
  id?: number;
  goals?: number;
  assists?: number;
  substituition?: number;
  name: string;
  playerId: number;
  gameId?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
  currentTeam: 'WHITE' | 'GREEN';
  constructor({ name, playerId, currentTeam }: PlayerStats) {
    this.currentTeam = currentTeam;
    this.name = name;
    this.playerId = playerId;
  }
}
