import { TweetEntity } from "src/tweets/entities/tweet.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 255,
  })
  name: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  user: string;

  @Column({
    type: "varchar",
    length: 255,
    unique: true
  })
  email: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  photo_url: string;

  @Column({ type: "boolean", })
  active: boolean;

  @OneToMany(() => TweetEntity, (tweets) => tweets.user, { cascade: true })
  tweets: TweetEntity[]

  addTweet(tweet: TweetEntity) {
    if (this.tweets == null) {
      this.tweets = new Array<TweetEntity>();
    }
    this.tweets.push(tweet);
  }
}