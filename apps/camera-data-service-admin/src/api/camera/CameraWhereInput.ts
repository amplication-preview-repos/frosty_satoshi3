import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";
import { RuleListRelationFilter } from "../rule/RuleListRelationFilter";
import { ZoneListRelationFilter } from "../zone/ZoneListRelationFilter";
import { StatisticListRelationFilter } from "../statistic/StatisticListRelationFilter";

export type CameraWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  ipAddress?: StringNullableFilter;
  location?: StringNullableFilter;
  settings?: JsonFilter;
  workspace?: WorkspaceWhereUniqueInput;
  rules?: RuleListRelationFilter;
  zones?: ZoneListRelationFilter;
  statistics?: StatisticListRelationFilter;
};
