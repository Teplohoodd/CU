import { Injectable } from "@nestjs/common";
import { PlayerDataInput } from "../matchmaking/PlayerDataInput";
import { MatchResultInput } from "../matchmaking/MatchResultInput";

@Injectable()
export class MatchmakingService {
  constructor() {}
  async GetPlayerData(args: PlayerDataInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async SubmitMatchResult(args: MatchResultInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
