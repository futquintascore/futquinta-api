import { CreatePlayerProfile } from './create-player-profile-usecase';
import { InMemoryPlayerProfileRepository } from './../../repositories/in-memory/InMemoryPlayerProfile';
import { describe, it, expect } from 'vitest';

import { ICreatePlayerProfileDTO } from './create-player-profile-dto';

describe('Player profile', () => {
  it('should be able to create a user', async () => {
    const createPlayerProfile = new CreatePlayerProfile(
      new InMemoryPlayerProfileRepository()
    );
    const testPlayerProfile: ICreatePlayerProfileDTO = {
      name: 'John Doe',
      goals: 0,
      assists: 0,
      victories: 0,
      defeats: 0,
      draws: 0,
      MOTMScore: 0,
    };
    const newPlayerProfile = await createPlayerProfile.execute(testPlayerProfile);
    expect(newPlayerProfile).toHaveProperty('id');
    expect(newPlayerProfile.name).toBe('John Doe');
  });

  it('should not be able to create a existing player', async () => {
    const createPlayerProfile = new CreatePlayerProfile(
      new InMemoryPlayerProfileRepository()
    );
    const testPlayerProfile: ICreatePlayerProfileDTO = {
      name: 'John Doe 1',
      goals: 0,
      assists: 0,
      victories: 0,
      defeats: 0,
      draws: 0,
      MOTMScore: 0,
    };
    await createPlayerProfile.execute(testPlayerProfile);
    expect(
      async () => await createPlayerProfile.execute(testPlayerProfile)
    ).rejects.toThrowError();
  });
});
