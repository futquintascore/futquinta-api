export interface ICreatePlayerProfileDTO {
  name: string;
  picture?: string;
  goals: number;
  assists: number;
  victories: number;
  defeats: number;
  draws: number;
  greenShirtpicture: string | null;
  whiteShirtpicture: string | null;
  shirtNumber: number | null;
  currentPicture: string | null;
}
