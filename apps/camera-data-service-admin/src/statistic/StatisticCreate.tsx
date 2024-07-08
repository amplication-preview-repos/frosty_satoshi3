import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WorkspaceTitle } from "../workspace/WorkspaceTitle";
import { CameraTitle } from "../camera/CameraTitle";

export const StatisticCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="report" multiline source="report" />
        <ReferenceInput
          source="workspace.id"
          reference="Workspace"
          label="workspace"
        >
          <SelectInput optionText={WorkspaceTitle} />
        </ReferenceInput>
        <ReferenceInput source="camera.id" reference="Camera" label="camera">
          <SelectInput optionText={CameraTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
