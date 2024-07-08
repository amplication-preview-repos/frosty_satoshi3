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
import { CAMERA_TITLE_FIELD } from "../camera/CameraTitle";

export const StatisticList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Statistics"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="camera" source="camera.id" reference="Camera">
          <TextField source={CAMERA_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
