import { Camera } from "../camera/Camera";
import { Workspace } from "../workspace/Workspace";

export type Rule = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  criteria: string | null;
  camera?: Camera | null;
  workspace?: Workspace | null;
};
