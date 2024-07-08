import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApiSettingServiceBase } from "./base/apiSetting.service.base";

@Injectable()
export class ApiSettingService extends ApiSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
