import { InputJsonValue } from "../../types";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";

export type ApiSettingUpdateInput = {
  name?: string | null;
  endpoint?: string | null;
  configuration?: InputJsonValue;
  workspace?: WorkspaceWhereUniqueInput | null;
};
