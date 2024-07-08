import { JsonValue } from "type-fest";
import { Workspace } from "../workspace/Workspace";

export type ApiSetting = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  endpoint: string | null;
  configuration: JsonValue;
  workspace?: Workspace | null;
};
