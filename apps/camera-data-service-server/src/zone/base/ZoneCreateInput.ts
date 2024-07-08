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
  ValidateNested,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { CameraWhereUniqueInput } from "../../camera/base/CameraWhereUniqueInput";
import { Type } from "class-transformer";
import { WorkspaceWhereUniqueInput } from "../../workspace/base/WorkspaceWhereUniqueInput";

@InputType()
class ZoneCreateInput {
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
  name?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  boundaries?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => CameraWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CameraWhereUniqueInput)
  @IsOptional()
  @Field(() => CameraWhereUniqueInput, {
    nullable: true,
  })
  camera?: CameraWhereUniqueInput | null;

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

export { ZoneCreateInput as ZoneCreateInput };
