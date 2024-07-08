import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RecognitionModelResolverBase } from "./base/recognitionModel.resolver.base";
import { RecognitionModel } from "./base/RecognitionModel";
import { RecognitionModelService } from "./recognitionModel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RecognitionModel)
export class RecognitionModelResolver extends RecognitionModelResolverBase {
  constructor(
    protected readonly service: RecognitionModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
