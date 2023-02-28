import { Team } from '@prisma/client';

export class MOTM {
  id?: number;
  team: Team;
  playerProfileId: number;
  gameId: number;

  constructor({ team, playerProfileId, gameId }: MOTM) {
    this.team = team;
    this.playerProfileId = playerProfileId;
    this.gameId = gameId;
  }
}
