import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type ApiSettingWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  endpoint?: StringNullableFilter;
  configuration?: JsonFilter;
  workspace?: WorkspaceWhereUniqueInput;
};
