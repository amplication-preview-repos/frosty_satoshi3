import { SortOrder } from "../../util/SortOrder";

export type ApiSettingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  endpoint?: SortOrder;
  configuration?: SortOrder;
  workspaceId?: SortOrder;
};
