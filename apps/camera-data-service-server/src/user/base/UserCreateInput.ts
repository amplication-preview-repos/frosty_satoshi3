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
import { WorkspaceWhereUniqueInput } from "../../workspace/base/WorkspaceWhereUniqueInput";
import { Type } from "class-transformer";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { SupportRequestCreateNestedManyWithoutUsersInput } from "./SupportRequestCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

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

  @ApiProperty({
    required: false,
    type: () => NotificationCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => NotificationCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => NotificationCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  notifications?: NotificationCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => SupportRequestCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SupportRequestCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SupportRequestCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  supportRequests?: SupportRequestCreateNestedManyWithoutUsersInput;
}

export { UserCreateInput as UserCreateInput };
