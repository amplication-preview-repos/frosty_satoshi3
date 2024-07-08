/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SupportRequestWhereUniqueInput } from "../../supportRequest/base/SupportRequestWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SupportRequestUpdateManyWithoutWorkspacesInput {
  @Field(() => [SupportRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SupportRequestWhereUniqueInput],
  })
  connect?: Array<SupportRequestWhereUniqueInput>;

  @Field(() => [SupportRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SupportRequestWhereUniqueInput],
  })
  disconnect?: Array<SupportRequestWhereUniqueInput>;

  @Field(() => [SupportRequestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SupportRequestWhereUniqueInput],
  })
  set?: Array<SupportRequestWhereUniqueInput>;
}

export { SupportRequestUpdateManyWithoutWorkspacesInput as SupportRequestUpdateManyWithoutWorkspacesInput };
