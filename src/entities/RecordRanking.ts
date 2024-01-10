// nome, id, gols sofridos,jogos
export class RecordRanking {
  playerId: number;
  name: string;
  record: number;
  games: number;

  constructor({ games, name, playerId, record }: RecordRanking) {
    this.games = games;
    this.name = name;
    this.playerId = playerId;
    this.record = record;
  }
}
