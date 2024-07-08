import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CameraWhereUniqueInput } from "../camera/CameraWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type RuleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  criteria?: StringNullableFilter;
  camera?: CameraWhereUniqueInput;
  workspace?: WorkspaceWhereUniqueInput;
};
