import { Winner } from '@prisma/client';

const getWinnerTeam = (whiteGoals: number, greenGoals: number): Winner => {
  if (whiteGoals > greenGoals && greenGoals < whiteGoals) {
    return 'WHITE';
  }
  if (greenGoals > whiteGoals && whiteGoals < greenGoals) {
    return 'GREEN';
  }
  if (greenGoals === whiteGoals) {
    return 'DRAW';
  }

  return 'DRAW';
};

export { getWinnerTeam };
