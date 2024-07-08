import { ApiSetting as TApiSetting } from "../api/apiSetting/ApiSetting";

export const APISETTING_TITLE_FIELD = "name";

export const ApiSettingTitle = (record: TApiSetting): string => {
  return record.name?.toString() || String(record.id);
};
