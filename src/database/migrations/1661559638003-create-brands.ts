import {MigrationInterface, QueryRunner} from "typeorm";

export class createBrands1661559638003 implements MigrationInterface {
    name = 'createBrands1661559638003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "brandId" integer`);
        await queryRunner.query(`ALTER TABLE "brand" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "brand" ADD "image" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_bb7d3d9dc1fae40293795ae39d6" FOREIGN KEY ("brandId") REFERENCES "brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_bb7d3d9dc1fae40293795ae39d6"`);
        await queryRunner.query(`ALTER TABLE "brand" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "brand" ADD "image" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "brandId"`);
    }

}
