import { GeneralRanking, GoalkeepersRanking } from '../entities/GeneralRanking';
import { RecordRanking } from '../entities/RecordRanking';

export interface IRankingsRepository {
  getRanking(): Promise<GeneralRanking>;
  getGoalkeepersRanking(): Promise<GoalkeepersRanking[]>;
  getRecordRanking(): Promise<RecordRanking[]>;
}
