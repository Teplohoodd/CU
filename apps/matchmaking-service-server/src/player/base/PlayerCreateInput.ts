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
  IsInt,
  Min,
  Max,
  IsEnum,
  IsDate,
} from "class-validator";
import { EnumPlayerPreferredRoles } from "./EnumPlayerPreferredRoles";
import { Type } from "class-transformer";

@InputType()
class PlayerCreateInput {
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
  username?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  mmr?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumPlayerPreferredRoles,
    isArray: true,
  })
  @IsEnum(EnumPlayerPreferredRoles, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumPlayerPreferredRoles], {
    nullable: true,
  })
  preferredRoles?: Array<"Option1">;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  queueTime?: Date | null;
}

export { PlayerCreateInput as PlayerCreateInput };
