import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CameraTitle } from "../camera/CameraTitle";
import { WorkspaceTitle } from "../workspace/WorkspaceTitle";

export const RuleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="criteria" multiline source="criteria" />
        <ReferenceInput source="camera.id" reference="Camera" label="camera">
          <SelectInput optionText={CameraTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="workspace.id"
          reference="Workspace"
          label="workspace"
        >
          <SelectInput optionText={WorkspaceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
