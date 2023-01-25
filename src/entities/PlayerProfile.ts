export class PlayerProfile {
  id?: number | string;
  name: string;
  picture?: string | null;
  goals: number;
  assists: number;
  victories: number;
  defeats: number;
  draws: number;
  MOTMScore?: number | null;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(props: PlayerProfile) {
    this.id = props.id;
    this.name = props.name;
    this.picture = props.picture;
    this.goals = props.goals;
    this.assists = props.assists;
    this.victories = props.victories;
    this.defeats = props.defeats;
    this.draws = props.draws;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
