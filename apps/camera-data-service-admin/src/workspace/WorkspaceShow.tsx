import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { WORKSPACE_TITLE_FIELD } from "./WorkspaceTitle";
import { CAMERA_TITLE_FIELD } from "../camera/CameraTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const WorkspaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <ReferenceManyField
          reference="RecognitionModel"
          target="workspaceId"
          label="RecognitionModels"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="description" source="description" />
            <TextField label="version" source="version" />
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
          reference="Camera"
          target="workspaceId"
          label="Cameras"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="ipAddress" source="ipAddress" />
            <TextField label="location" source="location" />
            <TextField label="settings" source="settings" />
            <ReferenceField
              label="workspace"
              source="workspace.id"
              reference="Workspace"
            >
              <TextField source={WORKSPACE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="User" target="workspaceId" label="Users">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Rule" target="workspaceId" label="Rules">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="criteria" source="criteria" />
            <ReferenceField
              label="camera"
              source="camera.id"
              reference="Camera"
            >
              <TextField source={CAMERA_TITLE_FIELD} />
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
        <ReferenceManyField reference="Zone" target="workspaceId" label="Zones">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="boundaries" source="boundaries" />
            <ReferenceField
              label="camera"
              source="camera.id"
              reference="Camera"
            >
              <TextField source={CAMERA_TITLE_FIELD} />
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
          reference="Notification"
          target="workspaceId"
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
          reference="Statistic"
          target="workspaceId"
          label="Statistics"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="metrics" source="metrics" />
            <TextField label="report" source="report" />
            <ReferenceField
              label="workspace"
              source="workspace.id"
              reference="Workspace"
            >
              <TextField source={WORKSPACE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="camera"
              source="camera.id"
              reference="Camera"
            >
              <TextField source={CAMERA_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ApiSetting"
          target="workspaceId"
          label="ApiSettings"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="endpoint" source="endpoint" />
            <TextField label="configuration" source="configuration" />
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
          target="workspaceId"
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
