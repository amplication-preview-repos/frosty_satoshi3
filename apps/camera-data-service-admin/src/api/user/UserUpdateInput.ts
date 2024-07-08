import { InputJsonValue } from "../../types";
import { WorkspaceWhereUniqueInput } from "../workspace/WorkspaceWhereUniqueInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { SupportRequestUpdateManyWithoutUsersInput } from "./SupportRequestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  workspace?: WorkspaceWhereUniqueInput | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  supportRequests?: SupportRequestUpdateManyWithoutUsersInput;
};
