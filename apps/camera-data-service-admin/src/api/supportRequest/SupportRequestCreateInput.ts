import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type SupportRequestCreateInput = {
  issue?: string | null;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  workspace?: WorkspaceWhereUniqueInput | null;
};
