import { InputJsonValue } from "../../types";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";
import { RuleCreateNestedManyWithoutCamerasInput } from "./RuleCreateNestedManyWithoutCamerasInput";
import { ZoneCreateNestedManyWithoutCamerasInput } from "./ZoneCreateNestedManyWithoutCamerasInput";
import { StatisticCreateNestedManyWithoutCamerasInput } from "./StatisticCreateNestedManyWithoutCamerasInput";

export type CameraCreateInput = {
  name?: string | null;
  ipAddress?: string | null;
  location?: string | null;
  settings?: InputJsonValue;
  workspace?: WorkspaceWhereUniqueInput | null;
  rules?: RuleCreateNestedManyWithoutCamerasInput;
  zones?: ZoneCreateNestedManyWithoutCamerasInput;
  statistics?: StatisticCreateNestedManyWithoutCamerasInput;
};
