/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SupportRequestService } from "../supportRequest.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SupportRequestCreateInput } from "./SupportRequestCreateInput";
import { SupportRequest } from "./SupportRequest";
import { SupportRequestFindManyArgs } from "./SupportRequestFindManyArgs";
import { SupportRequestWhereUniqueInput } from "./SupportRequestWhereUniqueInput";
import { SupportRequestUpdateInput } from "./SupportRequestUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SupportRequestControllerBase {
  constructor(
    protected readonly service: SupportRequestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SupportRequest })
  @nestAccessControl.UseRoles({
    resource: "SupportRequest",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSupportRequest(
    @common.Body() data: SupportRequestCreateInput
  ): Promise<SupportRequest> {
    return await this.service.createSupportRequest({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,

        workspace: data.workspace
          ? {
              connect: data.workspace,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        issue: true,
        priority: true,
        status: true,

        user: {
          select: {
            id: true,
          },
        },

        workspace: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SupportRequest] })
  @ApiNestedQuery(SupportRequestFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SupportRequest",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async supportRequests(
    @common.Req() request: Request
  ): Promise<SupportRequest[]> {
    const args = plainToClass(SupportRequestFindManyArgs, request.query);
    return this.service.supportRequests({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        issue: true,
        priority: true,
        status: true,

        user: {
          select: {
            id: true,
          },
        },

        workspace: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SupportRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SupportRequest",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async supportRequest(
    @common.Param() params: SupportRequestWhereUniqueInput
  ): Promise<SupportRequest | null> {
    const result = await this.service.supportRequest({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        issue: true,
        priority: true,
        status: true,

        user: {
          select: {
            id: true,
          },
        },

        workspace: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SupportRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SupportRequest",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSupportRequest(
    @common.Param() params: SupportRequestWhereUniqueInput,
    @common.Body() data: SupportRequestUpdateInput
  ): Promise<SupportRequest | null> {
    try {
      return await this.service.updateSupportRequest({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,

          workspace: data.workspace
            ? {
                connect: data.workspace,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          issue: true,
          priority: true,
          status: true,

          user: {
            select: {
              id: true,
            },
          },

          workspace: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SupportRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SupportRequest",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSupportRequest(
    @common.Param() params: SupportRequestWhereUniqueInput
  ): Promise<SupportRequest | null> {
    try {
      return await this.service.deleteSupportRequest({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          issue: true,
          priority: true,
          status: true,

          user: {
            select: {
              id: true,
            },
          },

          workspace: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
