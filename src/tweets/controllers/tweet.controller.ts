import { Controller, Post, Body, HttpException, HttpStatus } from "@nestjs/common";
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

}