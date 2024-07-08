import { User } from "../user/User";
import { Workspace } from "../workspace/Workspace";

export type SupportRequest = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  issue: string | null;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  user?: User | null;
  workspace?: Workspace | null;
};
