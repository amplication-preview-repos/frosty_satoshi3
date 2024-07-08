import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WORKSPACE_TITLE_FIELD } from "../workspace/WorkspaceTitle";

export const CameraList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Cameras"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
