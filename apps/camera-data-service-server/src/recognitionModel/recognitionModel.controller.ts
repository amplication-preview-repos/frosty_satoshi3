import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RecognitionModelService } from "./recognitionModel.service";
import { RecognitionModelControllerBase } from "./base/recognitionModel.controller.base";

@swagger.ApiTags("recognitionModels")
@common.Controller("recognitionModels")
export class RecognitionModelController extends RecognitionModelControllerBase {
  constructor(
    protected readonly service: RecognitionModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
