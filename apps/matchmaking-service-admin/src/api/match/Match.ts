import { JsonValue } from "type-fest";

export type Match = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  team1: JsonValue;
  team2: JsonValue;
};
