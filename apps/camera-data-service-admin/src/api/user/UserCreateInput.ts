import { InputJsonValue } from "../../types";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { SupportRequestCreateNestedManyWithoutUsersInput } from "./SupportRequestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  workspace?: WorkspaceWhereUniqueInput | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  supportRequests?: SupportRequestCreateNestedManyWithoutUsersInput;
};
