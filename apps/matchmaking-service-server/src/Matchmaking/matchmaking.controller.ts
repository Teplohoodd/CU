import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MatchmakingService } from "./matchmaking.service";
import { MatchResultInput } from "../matchmaking/MatchResultInput";

@swagger.ApiTags("matchmakings")
@common.Controller("matchmakings")
export class MatchmakingController {
  constructor(protected readonly service: MatchmakingService) {}

  @common.Post("/player-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetPlayerData(
    @common.Body()
    body: MatchResultInput
  ): Promise<string> {
        return this.service.GetPlayerData(body);
      }

  @common.Post("/match-result")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubmitMatchResult(
    @common.Body()
    body: MatchResultInput
  ): Promise<string> {
        return this.service.SubmitMatchResult(body);
      }
}
