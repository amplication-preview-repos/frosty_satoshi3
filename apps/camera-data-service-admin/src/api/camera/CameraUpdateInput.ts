import { InputJsonValue } from "../../types";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";
import { RuleUpdateManyWithoutCamerasInput } from "./RuleUpdateManyWithoutCamerasInput";
import { ZoneUpdateManyWithoutCamerasInput } from "./ZoneUpdateManyWithoutCamerasInput";
import { StatisticUpdateManyWithoutCamerasInput } from "./StatisticUpdateManyWithoutCamerasInput";

export type CameraUpdateInput = {
  name?: string | null;
  ipAddress?: string | null;
  location?: string | null;
  settings?: InputJsonValue;
  workspace?: WorkspaceWhereUniqueInput | null;
  rules?: RuleUpdateManyWithoutCamerasInput;
  zones?: ZoneUpdateManyWithoutCamerasInput;
  statistics?: StatisticUpdateManyWithoutCamerasInput;
};
