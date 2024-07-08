import { RecognitionModel } from "../recognitionModel/RecognitionModel";
import { Camera } from "../camera/Camera";
import { User } from "../user/User";
import { Rule } from "../rule/Rule";
import { Zone } from "../zone/Zone";
import { Notification } from "../notification/Notification";
import { Statistic } from "../statistic/Statistic";
import { ApiSetting } from "../apiSetting/ApiSetting";
import { SupportRequest } from "../supportRequest/SupportRequest";

export type Workspace = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  recognitionModels?: Array<RecognitionModel>;
  cameras?: Array<Camera>;
  users?: Array<User>;
  rules?: Array<Rule>;
  zones?: Array<Zone>;
  notifications?: Array<Notification>;
  statistics?: Array<Statistic>;
  apiSettings?: Array<ApiSetting>;
  supportRequests?: Array<SupportRequest>;
};
