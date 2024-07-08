import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WorkspaceList } from "./workspace/WorkspaceList";
import { WorkspaceCreate } from "./workspace/WorkspaceCreate";
import { WorkspaceEdit } from "./workspace/WorkspaceEdit";
import { WorkspaceShow } from "./workspace/WorkspaceShow";
import { RecognitionModelList } from "./recognitionModel/RecognitionModelList";
import { RecognitionModelCreate } from "./recognitionModel/RecognitionModelCreate";
import { RecognitionModelEdit } from "./recognitionModel/RecognitionModelEdit";
import { RecognitionModelShow } from "./recognitionModel/RecognitionModelShow";
import { ApiSettingList } from "./apiSetting/ApiSettingList";
import { ApiSettingCreate } from "./apiSetting/ApiSettingCreate";
import { ApiSettingEdit } from "./apiSetting/ApiSettingEdit";
import { ApiSettingShow } from "./apiSetting/ApiSettingShow";
import { CameraList } from "./camera/CameraList";
import { CameraCreate } from "./camera/CameraCreate";
import { CameraEdit } from "./camera/CameraEdit";
import { CameraShow } from "./camera/CameraShow";
import { RuleList } from "./rule/RuleList";
import { RuleCreate } from "./rule/RuleCreate";
import { RuleEdit } from "./rule/RuleEdit";
import { RuleShow } from "./rule/RuleShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { ZoneList } from "./zone/ZoneList";
import { ZoneCreate } from "./zone/ZoneCreate";
import { ZoneEdit } from "./zone/ZoneEdit";
import { ZoneShow } from "./zone/ZoneShow";
import { StatisticList } from "./statistic/StatisticList";
import { StatisticCreate } from "./statistic/StatisticCreate";
import { StatisticEdit } from "./statistic/StatisticEdit";
import { StatisticShow } from "./statistic/StatisticShow";
import { SupportRequestList } from "./supportRequest/SupportRequestList";
import { SupportRequestCreate } from "./supportRequest/SupportRequestCreate";
import { SupportRequestEdit } from "./supportRequest/SupportRequestEdit";
import { SupportRequestShow } from "./supportRequest/SupportRequestShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CameraDataService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Workspace"
          list={WorkspaceList}
          edit={WorkspaceEdit}
          create={WorkspaceCreate}
          show={WorkspaceShow}
        />
        <Resource
          name="RecognitionModel"
          list={RecognitionModelList}
          edit={RecognitionModelEdit}
          create={RecognitionModelCreate}
          show={RecognitionModelShow}
        />
        <Resource
          name="ApiSetting"
          list={ApiSettingList}
          edit={ApiSettingEdit}
          create={ApiSettingCreate}
          show={ApiSettingShow}
        />
        <Resource
          name="Camera"
          list={CameraList}
          edit={CameraEdit}
          create={CameraCreate}
          show={CameraShow}
        />
        <Resource
          name="Rule"
          list={RuleList}
          edit={RuleEdit}
          create={RuleCreate}
          show={RuleShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="Zone"
          list={ZoneList}
          edit={ZoneEdit}
          create={ZoneCreate}
          show={ZoneShow}
        />
        <Resource
          name="Statistic"
          list={StatisticList}
          edit={StatisticEdit}
          create={StatisticCreate}
          show={StatisticShow}
        />
        <Resource
          name="SupportRequest"
          list={SupportRequestList}
          edit={SupportRequestEdit}
          create={SupportRequestCreate}
          show={SupportRequestShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
