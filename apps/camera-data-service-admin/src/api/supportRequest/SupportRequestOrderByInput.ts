import { SortOrder } from "../../util/SortOrder";

export type SupportRequestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  issue?: SortOrder;
  priority?: SortOrder;
  status?: SortOrder;
  userId?: SortOrder;
  workspaceId?: SortOrder;
};
