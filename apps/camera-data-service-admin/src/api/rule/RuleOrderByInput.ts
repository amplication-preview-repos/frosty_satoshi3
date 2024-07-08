import { SortOrder } from "../../util/SortOrder";

export type RuleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  criteria?: SortOrder;
  cameraId?: SortOrder;
  workspaceId?: SortOrder;
};
