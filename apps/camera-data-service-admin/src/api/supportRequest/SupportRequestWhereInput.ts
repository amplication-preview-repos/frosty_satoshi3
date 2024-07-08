import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type SupportRequestWhereInput = {
  id?: StringFilter;
  issue?: StringNullableFilter;
  priority?: "Option1";
  status?: "Option1";
  user?: UserWhereUniqueInput;
  workspace?: WorkspaceWhereUniqueInput;
};
