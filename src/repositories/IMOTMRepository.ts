import { MOTM } from './../entities/MOTM';
export interface IMOTMRespository {
  save(data: MOTM): Promise<MOTM>;
  delete(id: number): Promise<MOTM>;
}
