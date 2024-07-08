import { SortOrder } from "../../util/SortOrder";

export type StatisticOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  metrics?: SortOrder;
  report?: SortOrder;
  workspaceId?: SortOrder;
  cameraId?: SortOrder;
};
