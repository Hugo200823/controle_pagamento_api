import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1707619767670 implements MigrationInterface {
    name = 'Migrations1707619767670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cliente" ADD "periodo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ALTER COLUMN "isPago" SET DEFAULT 'false'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cliente" ALTER COLUMN "isPago" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "periodo"`);
    }

}
