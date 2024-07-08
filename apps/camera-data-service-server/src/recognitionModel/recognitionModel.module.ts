import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RecognitionModelModuleBase } from "./base/recognitionModel.module.base";
import { RecognitionModelService } from "./recognitionModel.service";
import { RecognitionModelController } from "./recognitionModel.controller";
import { RecognitionModelResolver } from "./recognitionModel.resolver";

@Module({
  imports: [RecognitionModelModuleBase, forwardRef(() => AuthModule)],
  controllers: [RecognitionModelController],
  providers: [RecognitionModelService, RecognitionModelResolver],
  exports: [RecognitionModelService],
})
export class RecognitionModelModule {}
