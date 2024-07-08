import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WorkspaceTitle } from "../workspace/WorkspaceTitle";
import { CameraTitle } from "../camera/CameraTitle";

export const StatisticEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
