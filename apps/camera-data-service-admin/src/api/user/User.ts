import { JsonValue } from "type-fest";
import { Workspace } from "../workspace/Workspace";
import { Notification } from "../notification/Notification";
import { SupportRequest } from "../supportRequest/SupportRequest";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  workspace?: Workspace | null;
  notifications?: Array<Notification>;
  supportRequests?: Array<SupportRequest>;
};
