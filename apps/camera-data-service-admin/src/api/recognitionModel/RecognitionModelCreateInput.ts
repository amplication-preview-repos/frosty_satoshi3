import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type RecognitionModelCreateInput = {
  name?: string | null;
  description?: string | null;
  version?: string | null;
  workspace?: WorkspaceWhereUniqueInput | null;
};
