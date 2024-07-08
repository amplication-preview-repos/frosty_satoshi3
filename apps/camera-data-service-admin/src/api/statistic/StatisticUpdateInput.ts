import { InputJsonValue } from "../../types";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";
import { CameraWhereUniqueInput } from "../camera/CameraWhereUniqueInput";

export type StatisticUpdateInput = {
  metrics?: InputJsonValue;
  report?: string | null;
  workspace?: WorkspaceWhereUniqueInput | null;
  camera?: CameraWhereUniqueInput | null;
};
