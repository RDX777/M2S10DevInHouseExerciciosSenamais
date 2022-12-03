import { UsuarioEntity } from "src/users/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tweets" })
export class TweetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsuarioEntity, (user) => user.id, { onDelete: 'SET NULL' })
  //@JoinColumn({ name: 'user_id' })
  usuario: UsuarioEntity;

  @Column({ type: "text" })
  texto: string;

  @Column({ type: "date" })
  data: Date;
}