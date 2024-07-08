import { SortOrder } from "../../util/SortOrder";

export type RecognitionModelOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  version?: SortOrder;
  workspaceId?: SortOrder;
};
