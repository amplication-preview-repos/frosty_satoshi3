import { InputJsonValue } from "../../types";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";
import { CameraWhereUniqueInput } from "../camera/CameraWhereUniqueInput";

export type StatisticCreateInput = {
  metrics?: InputJsonValue;
  report?: string | null;
  workspace?: WorkspaceWhereUniqueInput | null;
  camera?: CameraWhereUniqueInput | null;
};
