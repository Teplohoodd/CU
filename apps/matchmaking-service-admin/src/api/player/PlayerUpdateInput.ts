export type PlayerUpdateInput = {
  username?: string | null;
  mmr?: number | null;
  preferredRoles?: Array<"Option1">;
  queueTime?: Date | null;
};
