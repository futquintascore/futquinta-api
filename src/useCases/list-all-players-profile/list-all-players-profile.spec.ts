import { PlayerProfile } from './../../entities/PlayerProfile';
import { IPlayerProfileRepository } from './../../repositories/IPlayersProfileRepository';
import { InMemoryPlayerProfileRepository } from './../../repositories/in-memory/InMemoryPlayerProfile';
import { CreatePlayerProfile } from './../create-player-profile/create-player-profile-usecase';
import { ListAllPlayersProfile } from './list-all-players-profile-usecase';
import { describe, it, beforeAll, expect } from 'vitest';

import { ICreatePlayerProfileDTO } from '../create-player-profile/create-player-profile-dto';

describe('list all players Profile', () => {
  const inMemoryPlayerProfileRepository = new InMemoryPlayerProfileRepository();
  beforeAll(async () => {
    const createPlayerProfile = new CreatePlayerProfile(inMemoryPlayerProfileRepository);
    const testPlayerProfile1: ICreatePlayerProfileDTO = {
      name: 'John Doe',
      goals: 0,
      assists: 0,
      victories: 0,
      defeats: 0,
      draws: 0,
      MOTMScore: 0,
    };
    const testPlayerProfile2: ICreatePlayerProfileDTO = {
      name: 'John Doe 1',
      goals: 0,
      assists: 0,
      victories: 0,
      defeats: 0,
      draws: 0,
      MOTMScore: 0,
    };
    await createPlayerProfile.execute(testPlayerProfile1);
    await createPlayerProfile.execute(testPlayerProfile2);
  });
  it('should be able to list all users', async () => {
    const listAllPlayersProfile = new ListAllPlayersProfile(
      inMemoryPlayerProfileRepository
    );

    const allPlayersProfile = await listAllPlayersProfile.execute();

    expect(allPlayersProfile[0].name).toBe('John Doe');
    expect(allPlayersProfile[1].name).toBe('John Doe 1');
  });
});
