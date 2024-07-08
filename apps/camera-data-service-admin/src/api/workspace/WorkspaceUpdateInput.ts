import { RecognitionModelUpdateManyWithoutWorkspacesInput } from "./RecognitionModelUpdateManyWithoutWorkspacesInput";
import { CameraUpdateManyWithoutWorkspacesInput } from "./CameraUpdateManyWithoutWorkspacesInput";
import { UserUpdateManyWithoutWorkspacesInput } from "./UserUpdateManyWithoutWorkspacesInput";
import { RuleUpdateManyWithoutWorkspacesInput } from "./RuleUpdateManyWithoutWorkspacesInput";
import { ZoneUpdateManyWithoutWorkspacesInput } from "./ZoneUpdateManyWithoutWorkspacesInput";
import { NotificationUpdateManyWithoutWorkspacesInput } from "./NotificationUpdateManyWithoutWorkspacesInput";
import { StatisticUpdateManyWithoutWorkspacesInput } from "./StatisticUpdateManyWithoutWorkspacesInput";
import { ApiSettingUpdateManyWithoutWorkspacesInput } from "./ApiSettingUpdateManyWithoutWorkspacesInput";
import { SupportRequestUpdateManyWithoutWorkspacesInput } from "./SupportRequestUpdateManyWithoutWorkspacesInput";

export type WorkspaceUpdateInput = {
  name?: string | null;
  description?: string | null;
  recognitionModels?: RecognitionModelUpdateManyWithoutWorkspacesInput;
  cameras?: CameraUpdateManyWithoutWorkspacesInput;
  users?: UserUpdateManyWithoutWorkspacesInput;
  rules?: RuleUpdateManyWithoutWorkspacesInput;
  zones?: ZoneUpdateManyWithoutWorkspacesInput;
  notifications?: NotificationUpdateManyWithoutWorkspacesInput;
  statistics?: StatisticUpdateManyWithoutWorkspacesInput;
  apiSettings?: ApiSettingUpdateManyWithoutWorkspacesInput;
  supportRequests?: SupportRequestUpdateManyWithoutWorkspacesInput;
};
