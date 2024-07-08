import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RuleModuleBase } from "./base/rule.module.base";
import { RuleService } from "./rule.service";
import { RuleController } from "./rule.controller";
import { RuleResolver } from "./rule.resolver";

@Module({
  imports: [RuleModuleBase, forwardRef(() => AuthModule)],
  controllers: [RuleController],
  providers: [RuleService, RuleResolver],
  exports: [RuleService],
})
export class RuleModule {}
