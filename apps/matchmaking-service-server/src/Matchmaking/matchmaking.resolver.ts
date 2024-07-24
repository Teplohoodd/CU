import * as graphql from "@nestjs/graphql";
import { PlayerDataInput } from "../matchmaking/PlayerDataInput";
import { MatchResultInput } from "../matchmaking/MatchResultInput";
import { MatchmakingService } from "./matchmaking.service";

export class MatchmakingResolver {
  constructor(protected readonly service: MatchmakingService) {}

  @graphql.Query(() => String)
  async GetPlayerData(
    @graphql.Args()
    args: PlayerDataInput
  ): Promise<string> {
    return this.service.GetPlayerData(args);
  }

  @graphql.Mutation(() => String)
  async SubmitMatchResult(
    @graphql.Args()
    args: MatchResultInput
  ): Promise<string> {
    return this.service.SubmitMatchResult(args);
  }
}
