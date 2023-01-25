import { PlayerProfile } from '../../entities/PlayerProfile';
import { IPlayerProfileRepository } from './../IPlayersProfileRepository';
import { v4 as UUID } from 'uuid';
export class InMemoryPlayerProfileRepository implements IPlayerProfileRepository {
  private _items: PlayerProfile[] = [];
  async list(): Promise<PlayerProfile[]> {
    return this._items;
  }
  async listById(id: number): Promise<PlayerProfile> {
    const findOne = this._items[id];

    if (!findOne) {
      throw new Error('Unable to find in database');
    }

    return findOne;
  }
  update(id: number, _reqBody: PlayerProfile): Promise<PlayerProfile> {
    const findOne = this._items[id];

    if (!findOne) {
      throw new Error('Unable to find in database');
    }
  }
  delete(id: number): Promise<PlayerProfile> {
    throw new Error('Method not implemented.');
  }
  incrementMOTMScore(id: number): Promise<PlayerProfile> {
    throw new Error('Method not implemented.');
  }
  async save({
    name,
    assists,
    defeats,
    draws,
    goals,
    victories,
  }: PlayerProfile): Promise<PlayerProfile> {
    const playerProfileExists = this._items.some((profile) => profile.name === name);

    if (playerProfileExists) {
      throw new Error('Name already exists');
    }
    const newPlayerProfile = new PlayerProfile({
      id: UUID(),
      name,
      goals,
      assists,
      victories,
      defeats,
      draws,
      MOTMScore: 0,
    });
    this._items.push(newPlayerProfile);
    return newPlayerProfile;
  }
}
