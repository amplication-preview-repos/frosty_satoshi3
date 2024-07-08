import { User } from "../user/User";
import { Workspace } from "../workspace/Workspace";

export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField?: "Option1" | null;
  message: string | null;
  user?: User | null;
  workspace?: Workspace | null;
};
