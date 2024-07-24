import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  mmr?: SortOrder;
  preferredRoles?: SortOrder;
  queueTime?: SortOrder;
};
