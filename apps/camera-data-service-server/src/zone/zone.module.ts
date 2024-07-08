import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ZoneModuleBase } from "./base/zone.module.base";
import { ZoneService } from "./zone.service";
import { ZoneController } from "./zone.controller";
import { ZoneResolver } from "./zone.resolver";

@Module({
  imports: [ZoneModuleBase, forwardRef(() => AuthModule)],
  controllers: [ZoneController],
  providers: [ZoneService, ZoneResolver],
  exports: [ZoneService],
})
export class ZoneModule {}
