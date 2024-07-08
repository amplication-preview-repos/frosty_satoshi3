/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ZoneWhereUniqueInput } from "../../zone/base/ZoneWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ZoneUpdateManyWithoutWorkspacesInput {
  @Field(() => [ZoneWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ZoneWhereUniqueInput],
  })
  connect?: Array<ZoneWhereUniqueInput>;

  @Field(() => [ZoneWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ZoneWhereUniqueInput],
  })
  disconnect?: Array<ZoneWhereUniqueInput>;

  @Field(() => [ZoneWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ZoneWhereUniqueInput],
  })
  set?: Array<ZoneWhereUniqueInput>;
}

export { ZoneUpdateManyWithoutWorkspacesInput as ZoneUpdateManyWithoutWorkspacesInput };
