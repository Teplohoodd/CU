import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PlayerWhereInput = {
  id?: StringFilter;
  username?: StringNullableFilter;
  mmr?: IntNullableFilter;
  queueTime?: DateTimeNullableFilter;
};
