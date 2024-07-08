import { SortOrder } from "../../util/SortOrder";

export type CameraOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  ipAddress?: SortOrder;
  location?: SortOrder;
  settings?: SortOrder;
  workspaceId?: SortOrder;
};
