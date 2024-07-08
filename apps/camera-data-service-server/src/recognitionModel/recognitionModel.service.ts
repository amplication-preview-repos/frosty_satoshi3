import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecognitionModelServiceBase } from "./base/recognitionModel.service.base";

@Injectable()
export class RecognitionModelService extends RecognitionModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
