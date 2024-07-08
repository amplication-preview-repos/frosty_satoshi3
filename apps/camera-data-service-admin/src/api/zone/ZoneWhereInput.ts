import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CameraWhereUniqueInput } from "../camera/CameraWhereUniqueInput";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type ZoneWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  boundaries?: JsonFilter;
  camera?: CameraWhereUniqueInput;
  workspace?: WorkspaceWhereUniqueInput;
};
