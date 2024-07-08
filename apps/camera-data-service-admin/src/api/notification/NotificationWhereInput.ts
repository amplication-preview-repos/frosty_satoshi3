import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type NotificationWhereInput = {
  id?: StringFilter;
  typeField?: "Option1";
  message?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  workspace?: WorkspaceWhereUniqueInput;
};
