import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RecognitionModelListRelationFilter } from "../recognitionModel/RecognitionModelListRelationFilter";
import { CameraListRelationFilter } from "../camera/CameraListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { RuleListRelationFilter } from "../rule/RuleListRelationFilter";
import { ZoneListRelationFilter } from "../zone/ZoneListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { StatisticListRelationFilter } from "../statistic/StatisticListRelationFilter";
import { ApiSettingListRelationFilter } from "../apiSetting/ApiSettingListRelationFilter";
import { SupportRequestListRelationFilter } from "../supportRequest/SupportRequestListRelationFilter";

export type WorkspaceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  recognitionModels?: RecognitionModelListRelationFilter;
  cameras?: CameraListRelationFilter;
  users?: UserListRelationFilter;
  rules?: RuleListRelationFilter;
  zones?: ZoneListRelationFilter;
  notifications?: NotificationListRelationFilter;
  statistics?: StatisticListRelationFilter;
  apiSettings?: ApiSettingListRelationFilter;
  supportRequests?: SupportRequestListRelationFilter;
};
