import { SortOrder } from "../../util/SortOrder";

export type ZoneOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  boundaries?: SortOrder;
  cameraId?: SortOrder;
  workspaceId?: SortOrder;
};
