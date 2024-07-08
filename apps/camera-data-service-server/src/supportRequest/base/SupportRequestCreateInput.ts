/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { EnumSupportRequestPriority } from "./EnumSupportRequestPriority";
import { EnumSupportRequestStatus } from "./EnumSupportRequestStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { WorkspaceWhereUniqueInput } from "../../workspace/base/WorkspaceWhereUniqueInput";

@InputType()
class SupportRequestCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  issue?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumSupportRequestPriority,
  })
  @IsEnum(EnumSupportRequestPriority)
  @IsOptional()
  @Field(() => EnumSupportRequestPriority, {
    nullable: true,
  })
  priority?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumSupportRequestStatus,
  })
  @IsEnum(EnumSupportRequestStatus)
  @IsOptional()
  @Field(() => EnumSupportRequestStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => WorkspaceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkspaceWhereUniqueInput)
  @IsOptional()
  @Field(() => WorkspaceWhereUniqueInput, {
    nullable: true,
  })
  workspace?: WorkspaceWhereUniqueInput | null;
}

export { SupportRequestCreateInput as SupportRequestCreateInput };
