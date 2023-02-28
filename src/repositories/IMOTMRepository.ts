import { MOTM } from './../entities/MOTM';
export interface IMOTMRespository {
  save(data: MOTM): Promise<MOTM>;
}
