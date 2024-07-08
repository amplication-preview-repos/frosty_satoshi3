import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApiSettingService } from "./apiSetting.service";
import { ApiSettingControllerBase } from "./base/apiSetting.controller.base";

@swagger.ApiTags("apiSettings")
@common.Controller("apiSettings")
export class ApiSettingController extends ApiSettingControllerBase {
  constructor(
    protected readonly service: ApiSettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
