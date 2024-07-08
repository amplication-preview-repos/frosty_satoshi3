import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";
import { CameraWhereUniqueInput } from "../camera/CameraWhereUniqueInput";

export type StatisticWhereInput = {
  id?: StringFilter;
  metrics?: JsonFilter;
  report?: StringNullableFilter;
  workspace?: WorkspaceWhereUniqueInput;
  camera?: CameraWhereUniqueInput;
};
