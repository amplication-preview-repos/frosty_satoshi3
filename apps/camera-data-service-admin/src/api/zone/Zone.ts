import { JsonValue } from "type-fest";
import { Camera } from "../camera/Camera";
import { Workspace } from "../workspace/Workspace";

export type Zone = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  boundaries: JsonValue;
  camera?: Camera | null;
  workspace?: Workspace | null;
};
