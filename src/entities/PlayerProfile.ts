import { PlayerProfileRole } from '@prisma/client';
export class PlayerProfile {
  id?: number | string;
  name: string;
  greenShirtpicture?: string | null;
  whiteShirtpicture?: string | null;
  currentPicture?: string | null;
  shirtNumber: number | null;
  slug: string;
  goals: number;
  assists: number;
  victories: number;
  defeats: number;
  draws: number;
  role: PlayerProfileRole;
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
    this.slug = props.slug;
    this.shirtNumber = props.shirtNumber;
    this.role = props.role;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
