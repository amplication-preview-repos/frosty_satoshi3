import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApiSettingResolverBase } from "./base/apiSetting.resolver.base";
import { ApiSetting } from "./base/ApiSetting";
import { ApiSettingService } from "./apiSetting.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApiSetting)
export class ApiSettingResolver extends ApiSettingResolverBase {
  constructor(
    protected readonly service: ApiSettingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
