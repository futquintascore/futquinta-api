export interface ICreatePlayerProfileDTO {
  name: string;
  goals: number;
  assists: number;
  victories: number;
  defeats: number;
  draws: number;
  slug: string;
  greenShirtpicture: string | null;
  whiteShirtpicture: string | null;
  shirtNumber: number | null;
  currentPicture: string | null;
}
