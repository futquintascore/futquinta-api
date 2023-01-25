import { InMemoryPlayerProfileRepository } from './../../repositories/in-memory/InMemoryPlayerProfile';
import { CreatePlayerProfile } from './../create-player-profile/create-player-profile-usecase';
import { describe, it, beforeAll, expect } from 'vitest';

import { ICreatePlayerProfileDTO } from '../create-player-profile/create-player-profile-dto';

describe('list one players Profile', () => {
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
  it('should be able to find one user', async () => {
    const listAllPlayersProfile = new ListOnePlayerProfileUseCase(
      inMemoryPlayerProfileRepository
    );

    const playerProfile = await listAllPlayersProfile.execute(1);

    expect(playerProfile).toHaveProperty('id');
  });
  it('should be unable to find a player profile that doesn`t exists', async () => {
    const listAllPlayersProfile = new ListOnePlayerProfileUseCase(
      inMemoryPlayerProfileRepository
    );
    expect(async () => await listAllPlayersProfile.execute(4)).rejects.toThrowError();
  });
});
