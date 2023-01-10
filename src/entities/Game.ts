enum Status {
  NOT_STARTED,
  IN_PROGRESS,
  FINISHED,
}

export class Game {
  id?: number;
  whiteGoals: number;
  greenGoals: number;
  winnerTeam?: 'WHITE' | 'GREEN' | 'DRAW';
  whiteMOTM?: string;
  greenMOTM?: string;
  status?: 'NOT_STARTED' | 'IN_PROGRESS' | 'FINISHED';
  createdAt?: Date;
  updatedAt?: Date;
  playerId?: number | null;

  constructor(props: Game) {
    this.whiteGoals = props.whiteGoals;
    this.greenGoals = props.greenGoals;
  }
}
