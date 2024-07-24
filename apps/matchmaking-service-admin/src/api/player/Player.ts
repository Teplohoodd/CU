export type Player = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string | null;
  mmr: number | null;
  preferredRoles?: Array<"Option1">;
  queueTime: Date | null;
};
