export type JWTPayload = {
  token?: string;
  user: {
    id: string;
    email: string;
  };
};
