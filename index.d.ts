export const PlayerFunction: {
  OUTFIELDPLAYER: 'OUTFIELDPLAYER',
  GOALKEEPER: 'GOALKEEPER'
};

export type PlayerFunction = (typeof PlayerFunction)[keyof typeof PlayerFunction]


export const PlayerProfileRole: {
  PERMANENT: 'PERMANENT',
  GUEST: 'GUEST'
};

export type PlayerProfileRole = (typeof PlayerProfileRole)[keyof typeof PlayerProfileRole]


export const Status: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Team: {
  WHITE: 'WHITE',
  GREEN: 'GREEN'
};

export type Team = (typeof Team)[keyof typeof Team]


export const Winner: {
  WHITE: 'WHITE',
  GREEN: 'GREEN',
  DRAW: 'DRAW'
};

export type Winner = (typeof Winner)[keyof typeof Winner]
export type User = {
  id: number
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model PlayerProfile
 * 
 */
export type PlayerProfileWithStats = {
  id: number
  name: string
  slug: string
  greenShirtpicture: string | null
  whiteShirtpicture: string | null
  currentPicture: string | null
  shirtNumber: number | null
  goals: number
  assists: number
  goalsConceded: number | null
  victories: number
  defeats: number
  draws: number
  function: PlayerFunction
  createdAt: Date
  updatedAt: Date
  role: PlayerProfileRole
  Stats:PlayerStats[]
  MOTM:MOTM[]
}

/**
 * Model Game
 * 
 */
export type Game = {
  id: number
  whiteGoals: number
  greenGoals: number
  winnerTeam: Winner
  status: Status
  createdAt: Date
  updatedAt: Date
  playerId: number | null
  slug: string | null
  gamePicture: string | null
}

/**
 * Model PlayerStats
 * 
 */
export type PlayerStats = {
  id: number
  name: string
  goals: number
  assists: number
  substituition: number
  goalsConceded: number | null
  function: PlayerFunction
  currentTeam: Team
  playerId: number
  gameId: number | null
  createdAt: Date
  updatedAt: Date
  slug: string | null
  Game:Game
}
export type MOTM = {
  id: number
  team: Team
  playerProfileId: number
}
