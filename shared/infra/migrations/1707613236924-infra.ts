import { MigrationInterface, QueryRunner } from "typeorm";

export class Infra1707613236924 implements MigrationInterface {
    name = 'Infra1707613236924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "empresa" ("nome" character varying NOT NULL, CONSTRAINT "empresa_pk" PRIMARY KEY ("nome"))`);
        await queryRunner.query(`CREATE TABLE "cliente" ("nome" character varying NOT NULL, "cpf" character varying, "dataVencimento" TIMESTAMP NOT NULL, "valor" numeric NOT NULL, "isPago" boolean NOT NULL DEFAULT 'false', "empresaNome" character varying, CONSTRAINT "cliente_pk" PRIMARY KEY ("nome"))`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD CONSTRAINT "FK_2a90f54c5259780814e7de04831" FOREIGN KEY ("empresaNome") REFERENCES "empresa"("nome") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cliente" DROP CONSTRAINT "FK_2a90f54c5259780814e7de04831"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
        await queryRunner.query(`DROP TABLE "empresa"`);
    }

}
