import { JsonValue } from "type-fest";
import { Workspace } from "../workspace/Workspace";
import { Rule } from "../rule/Rule";
import { Zone } from "../zone/Zone";
import { Statistic } from "../statistic/Statistic";

export type Camera = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  ipAddress: string | null;
  location: string | null;
  settings: JsonValue;
  workspace?: Workspace | null;
  rules?: Array<Rule>;
  zones?: Array<Zone>;
  statistics?: Array<Statistic>;
};
