import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RecognitionModelTitle } from "../recognitionModel/RecognitionModelTitle";
import { CameraTitle } from "../camera/CameraTitle";
import { UserTitle } from "../user/UserTitle";
import { RuleTitle } from "../rule/RuleTitle";
import { ZoneTitle } from "../zone/ZoneTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { StatisticTitle } from "../statistic/StatisticTitle";
import { ApiSettingTitle } from "../apiSetting/ApiSettingTitle";
import { SupportRequestTitle } from "../supportRequest/SupportRequestTitle";

export const WorkspaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="recognitionModels"
          reference="RecognitionModel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecognitionModelTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="cameras"
          reference="Camera"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CameraTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
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
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="statistics"
          reference="Statistic"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StatisticTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="apiSettings"
          reference="ApiSetting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApiSettingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="supportRequests"
          reference="SupportRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SupportRequestTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
