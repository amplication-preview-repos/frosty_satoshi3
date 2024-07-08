import { JsonValue } from "type-fest";
import { Workspace } from "../workspace/Workspace";
import { Camera } from "../camera/Camera";

export type Statistic = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  metrics: JsonValue;
  report: string | null;
  workspace?: Workspace | null;
  camera?: Camera | null;
};
