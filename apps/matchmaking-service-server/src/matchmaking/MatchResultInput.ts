import { ArgsType, Field } from "@nestjs/graphql";
import { PlayerDataInput } from "./PlayerDataInput";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class MatchResultInput {
    @Field(() => [PlayerDataInput])
    @ApiProperty({
        required: true,
        type: () => [PlayerDataInput]
    })
    @Type(() => PlayerDataInput)
    team1!: PlayerDataInput;

    @Field(() => [PlayerDataInput])
    @ApiProperty({
        required: true,
        type: () => [PlayerDataInput]
    })
    @Type(() => PlayerDataInput)
    team2!: PlayerDataInput;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    matchResult!: string;
}

export { MatchResultInput as MatchResultInput };