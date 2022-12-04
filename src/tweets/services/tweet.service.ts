import { Inject, Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { CriacaoTweetDTO } from "../dtos/criacao-tweet.dto";
import { TweetEntity } from "../entities/tweet.entity";

@Injectable()
export class TweetService {

  constructor(
    @Inject('TWEET_REPOSITORY')
    private tweetRepository: Repository<TweetEntity>
  ) { }

  public async store(tweet: CriacaoTweetDTO) {
    return new Promise(async (resolve, reject) => {
      try {

        const resposta = await this.tweetRepository.insert(tweet)
        const { id } = (resposta).identifiers[0];
        let idCriacao = new TweetEntity;
        idCriacao = { ...id, id: id };
        resolve(idCriacao);

      } catch (erro) {
        reject({
          code: erro.code,
          detail: erro.detail
        });
      }
    })
  }
}