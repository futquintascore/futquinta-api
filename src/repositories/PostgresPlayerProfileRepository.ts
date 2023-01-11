/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
import { PlayerProfile } from '../entities/PlayerProfile';
import { IPlayerProfileRepository } from './IPlayersProfileRepository';
import { PlayersProfile } from '../services/prismaClient';
export class PostgresPlayerProfileRepository implements IPlayerProfileRepository {
  async list(): Promise<PlayerProfile[]> {
    const playerProfileList = await PlayersProfile.findMany();

    return playerProfileList;
  }
  async listById(id: number): Promise<PlayerProfile> {
    try {
      const listPlayerById = await PlayersProfile.findUniqueOrThrow({
        where: {
          id: id,
        },
        include: {
          games: true,
          Stats: true,
        },
      });

      return listPlayerById;
    } catch (err) {
      throw new Error('Generic error');
    }
  }
  async update(id: number, _reqBody: any): Promise<PlayerProfile> {
    try {
      const updatedPlayer = await PlayersProfile.update({
        where: {
          id: id,
        },
        data: { ..._reqBody },
      });
      return updatedPlayer;
    } catch (err) {
      throw new Error('generic error');
    }
  }
  async delete(id: number): Promise<PlayerProfile> {
    try {
      const deletedUser = await PlayersProfile.delete({
        where: { id },
      });
      return deletedUser;
    } catch (err) {
      throw new Error('erro');
    }
  }
  async save({
    name,
    goals,
    assists,
    victories,
    defeats,
    draws,
  }: PlayerProfile): Promise<PlayerProfile> {
    try {
      const newPlayerProfile = await PlayersProfile.create({
        data: {
          name,
          goals,
          assists,
          victories,
          defeats,
          draws,
        },
      });

      return newPlayerProfile;
    } catch (err) {
      throw new Error('generic errorr');
    }
  }
}
