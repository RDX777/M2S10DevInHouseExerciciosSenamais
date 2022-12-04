import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
import { TweetController } from './controllers/tweet.controller';
import { TweetService } from './services/tweet.service';
import { tweetProvider } from './providers/tweet.provider';

@Module({
  controllers: [TweetController],
  providers: [
    ...databaseProviders,
    ...tweetProvider,
    TweetService
  ]
})
export class TweetModule { }
