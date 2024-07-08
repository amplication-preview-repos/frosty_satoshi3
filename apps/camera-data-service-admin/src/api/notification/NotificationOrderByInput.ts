import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  message?: SortOrder;
  userId?: SortOrder;
  workspaceId?: SortOrder;
};
