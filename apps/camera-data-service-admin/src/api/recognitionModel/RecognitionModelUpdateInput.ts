import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type RecognitionModelUpdateInput = {
  name?: string | null;
  description?: string | null;
  version?: string | null;
  workspace?: WorkspaceWhereUniqueInput | null;
};
