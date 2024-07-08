import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CameraTitle } from "../camera/CameraTitle";
import { WorkspaceTitle } from "../workspace/WorkspaceTitle";

export const ZoneCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <div />
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
    </Create>
  );
};
