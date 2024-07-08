import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WorkspaceTitle } from "../workspace/WorkspaceTitle";
import { RuleTitle } from "../rule/RuleTitle";
import { ZoneTitle } from "../zone/ZoneTitle";
import { StatisticTitle } from "../statistic/StatisticTitle";

export const CameraEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="ipAddress" source="ipAddress" />
        <TextInput label="location" multiline source="location" />
        <div />
        <ReferenceInput
          source="workspace.id"
          reference="Workspace"
          label="workspace"
        >
          <SelectInput optionText={WorkspaceTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="rules"
          reference="Rule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RuleTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="zones"
          reference="Zone"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ZoneTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="statistics"
          reference="Statistic"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StatisticTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
