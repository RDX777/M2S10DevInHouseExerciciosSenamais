import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  user: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 255 })
  photo_url: string;

  @Column()
  active: boolean;
}