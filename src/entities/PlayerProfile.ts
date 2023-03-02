export class PlayerProfile {
  id?: number | string;
  name: string;
  pictures?: {
    greenShirt?: string;
    whiteShirt?: string;
  };
  shirtNumber: number | null;
  currentPicture?: string | null;
  goals: number;
  assists: number;
  victories: number;
  defeats: number;
  draws: number;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(props: PlayerProfile) {
    this.id = props.id;
    this.name = props.name;
    this.goals = props.goals;
    this.assists = props.assists;
    this.victories = props.victories;
    this.defeats = props.defeats;
    this.draws = props.draws;
    this.shirtNumber = props.shirtNumber;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
