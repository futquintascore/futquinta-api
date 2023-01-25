export interface ICreatePlayerProfileDTO {
  name: string;
  picture?: string;
  goals: number;
  assists: number;
  victories: number;
  defeats: number;
  draws: number;
  MOTMScore: number;
}
