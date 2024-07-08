import { ApiSettingWhereInput } from "./ApiSettingWhereInput";
import { ApiSettingOrderByInput } from "./ApiSettingOrderByInput";

export type ApiSettingFindManyArgs = {
  where?: ApiSettingWhereInput;
  orderBy?: Array<ApiSettingOrderByInput>;
  skip?: number;
  take?: number;
};
