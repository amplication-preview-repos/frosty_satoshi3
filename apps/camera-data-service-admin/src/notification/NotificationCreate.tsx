import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { WorkspaceTitle } from "../workspace/WorkspaceTitle";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="message" multiline source="message" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
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
