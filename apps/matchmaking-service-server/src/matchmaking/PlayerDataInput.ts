import { ArgsType, InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@InputType("PlayerDataInputInput")
class PlayerDataInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    username!: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    mmr!: number;

    @Field(() => [String])
    @ApiProperty({
        required: true,
        type: () => [String]
    })
    @Type(() => String)
    preferredRoles!: string;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    queueTime?: Date;
}

export { PlayerDataInput as PlayerDataInput };