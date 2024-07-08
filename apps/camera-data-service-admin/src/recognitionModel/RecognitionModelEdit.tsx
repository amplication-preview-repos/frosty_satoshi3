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

export const RecognitionModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="version" source="version" />
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
