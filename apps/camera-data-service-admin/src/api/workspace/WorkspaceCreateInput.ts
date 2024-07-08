import { RecognitionModelCreateNestedManyWithoutWorkspacesInput } from "./RecognitionModelCreateNestedManyWithoutWorkspacesInput";
import { CameraCreateNestedManyWithoutWorkspacesInput } from "./CameraCreateNestedManyWithoutWorkspacesInput";
import { UserCreateNestedManyWithoutWorkspacesInput } from "./UserCreateNestedManyWithoutWorkspacesInput";
import { RuleCreateNestedManyWithoutWorkspacesInput } from "./RuleCreateNestedManyWithoutWorkspacesInput";
import { ZoneCreateNestedManyWithoutWorkspacesInput } from "./ZoneCreateNestedManyWithoutWorkspacesInput";
import { NotificationCreateNestedManyWithoutWorkspacesInput } from "./NotificationCreateNestedManyWithoutWorkspacesInput";
import { StatisticCreateNestedManyWithoutWorkspacesInput } from "./StatisticCreateNestedManyWithoutWorkspacesInput";
import { ApiSettingCreateNestedManyWithoutWorkspacesInput } from "./ApiSettingCreateNestedManyWithoutWorkspacesInput";
import { SupportRequestCreateNestedManyWithoutWorkspacesInput } from "./SupportRequestCreateNestedManyWithoutWorkspacesInput";

export type WorkspaceCreateInput = {
  name?: string | null;
  description?: string | null;
  recognitionModels?: RecognitionModelCreateNestedManyWithoutWorkspacesInput;
  cameras?: CameraCreateNestedManyWithoutWorkspacesInput;
  users?: UserCreateNestedManyWithoutWorkspacesInput;
  rules?: RuleCreateNestedManyWithoutWorkspacesInput;
  zones?: ZoneCreateNestedManyWithoutWorkspacesInput;
  notifications?: NotificationCreateNestedManyWithoutWorkspacesInput;
  statistics?: StatisticCreateNestedManyWithoutWorkspacesInput;
  apiSettings?: ApiSettingCreateNestedManyWithoutWorkspacesInput;
  supportRequests?: SupportRequestCreateNestedManyWithoutWorkspacesInput;
};
