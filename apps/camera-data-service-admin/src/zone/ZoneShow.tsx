import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CAMERA_TITLE_FIELD } from "../camera/CameraTitle";
import { WORKSPACE_TITLE_FIELD } from "../workspace/WorkspaceTitle";

export const ZoneShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="boundaries" source="boundaries" />
        <ReferenceField label="camera" source="camera.id" reference="Camera">
          <TextField source={CAMERA_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="workspace"
          source="workspace.id"
          reference="Workspace"
        >
          <TextField source={WORKSPACE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
