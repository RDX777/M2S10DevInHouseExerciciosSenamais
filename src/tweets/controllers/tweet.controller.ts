import { Controller, Post, Body, HttpException, HttpStatus, Get, Param, Query } from "@nestjs/common";
import { CriacaoTweetDTO } from "../dtos/criacao-tweet.dto";
import { TweetService } from "../services/tweet.service";

@Controller("tweets")
export class TweetController {

  constructor(private tweetService: TweetService) { }

  @Post("cria")
  public async store(@Body() tweet: CriacaoTweetDTO) {
    try {
      return await this.tweetService.store(tweet);
    } catch (erro) {
      throw new HttpException({ reason: erro }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get("lista")
  public async listLatest(@Query("quantidade") quantidade: string) {
    if (+quantidade === 0 || quantidade) {
      try {
        return await this.tweetService.listLatest(+quantidade);
      } catch (erro) {
        throw new HttpException({ reason: erro }, HttpStatus.BAD_REQUEST);
      }
    }
    throw new HttpException({ reason: "Quantidade deve ser maior que 0" }, HttpStatus.BAD_REQUEST);
  }

}