export class GeneralRanking {
  playerId: number;
  position: number;
  name: string;
  pointsDisputed: number;
  pointsEarned: number;
  games: number;
  gamesRecord: number;

  constructor({
    position,
    games,
    gamesRecord,
    pointsDisputed,
    pointsEarned,
    name,
    playerId,
  }: GeneralRanking) {
    this.games = games;
    this.pointsDisputed = pointsDisputed;
    this.pointsEarned = pointsEarned;
    this.gamesRecord = gamesRecord;
    this.position = position;
    this.name = name;
    this.playerId = playerId;
  }
}
