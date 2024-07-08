import { CameraWhereUniqueInput } from "../camera/CameraWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type RuleUpdateInput = {
  name?: string | null;
  criteria?: string | null;
  camera?: CameraWhereUniqueInput | null;
  workspace?: WorkspaceWhereUniqueInput | null;
};
