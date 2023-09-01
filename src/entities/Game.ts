export class Game {
  id?: number;
  whiteGoals: number;
  greenGoals: number;
  winnerTeam?: 'WHITE' | 'GREEN' | 'DRAW';
  fixture: number;
  whiteMOTM?: string;
  greenMOTM?: string;
  status?: 'NOT_STARTED' | 'IN_PROGRESS' | 'FINISHED';
  createdAt?: Date;
  updatedAt?: Date;
  playerId?: number | null;
  gameDate: Date;

  constructor(props: Game) {
    this.whiteGoals = props.whiteGoals;
    this.greenGoals = props.greenGoals;
    this.gameDate = props.gameDate;
    this.fixture = props.fixture;
  }
}
