import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type NotificationUpdateInput = {
  typeField?: "Option1" | null;
  message?: string | null;
  user?: UserWhereUniqueInput | null;
  workspace?: WorkspaceWhereUniqueInput | null;
};
