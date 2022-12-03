import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableUsuariosTweets1670098484580 implements MigrationInterface {
    name = 'createTableUsuariosTweets1670098484580'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tweets" ("id" SERIAL NOT NULL, "texto" text NOT NULL, "data" date NOT NULL, "usuarioId" integer, CONSTRAINT "PK_19d841599ad812c558807aec76c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "UQ_0790a401b9d234fa921e9aa1777" UNIQUE ("usuario")`);
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "status" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "tweets" ADD CONSTRAINT "FK_73f11f9cec85ccfc6115a703783" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tweets" DROP CONSTRAINT "FK_73f11f9cec85ccfc6115a703783"`);
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "status" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "UQ_0790a401b9d234fa921e9aa1777"`);
        await queryRunner.query(`DROP TABLE "tweets"`);
    }

}
