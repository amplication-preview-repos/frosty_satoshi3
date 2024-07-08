import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApiSettingModuleBase } from "./base/apiSetting.module.base";
import { ApiSettingService } from "./apiSetting.service";
import { ApiSettingController } from "./apiSetting.controller";
import { ApiSettingResolver } from "./apiSetting.resolver";

@Module({
  imports: [ApiSettingModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApiSettingController],
  providers: [ApiSettingService, ApiSettingResolver],
  exports: [ApiSettingService],
})
export class ApiSettingModule {}
