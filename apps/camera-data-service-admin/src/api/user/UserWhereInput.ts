import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { SupportRequestListRelationFilter } from "../supportRequest/SupportRequestListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  workspace?: WorkspaceWhereUniqueInput;
  notifications?: NotificationListRelationFilter;
  supportRequests?: SupportRequestListRelationFilter;
};
