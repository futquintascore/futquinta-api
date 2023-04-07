import { GeneralRanking } from '../entities/GeneralRanking';

export interface IRankingsRepository {
  getRanking(): Promise<GeneralRanking>;
}
