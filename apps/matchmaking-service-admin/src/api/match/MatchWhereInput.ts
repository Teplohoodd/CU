import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MatchWhereInput = {
  id?: StringFilter;
  team1?: JsonFilter;
  team2?: JsonFilter;
};
