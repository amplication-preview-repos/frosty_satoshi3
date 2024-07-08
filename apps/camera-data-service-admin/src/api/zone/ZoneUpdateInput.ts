import { InputJsonValue } from "../../types";
import { CameraWhereUniqueInput } from "../camera/CameraWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type ZoneUpdateInput = {
  name?: string | null;
  boundaries?: InputJsonValue;
  camera?: CameraWhereUniqueInput | null;
  workspace?: WorkspaceWhereUniqueInput | null;
};
