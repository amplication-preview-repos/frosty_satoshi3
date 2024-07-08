import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { WORKSPACE_TITLE_FIELD } from "../workspace/WorkspaceTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Email" source="email" />
        <TextField label="Roles" source="roles" />
        <ReferenceField
          label="workspace"
          source="workspace.id"
          reference="Workspace"
        >
          <TextField source={WORKSPACE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Notification"
          target="userId"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="type" source="typeField" />
            <TextField label="message" source="message" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="workspace"
              source="workspace.id"
              reference="Workspace"
            >
              <TextField source={WORKSPACE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SupportRequest"
          target="userId"
          label="SupportRequests"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="issue" source="issue" />
            <TextField label="priority" source="priority" />
            <TextField label="status" source="status" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="workspace"
              source="workspace.id"
              reference="Workspace"
            >
              <TextField source={WORKSPACE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
