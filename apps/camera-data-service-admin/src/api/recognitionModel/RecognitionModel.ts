import { Workspace } from "../workspace/Workspace";

export type RecognitionModel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  version: string | null;
  workspace?: Workspace | null;
};
