import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" ADD COLUMN "sort_order" numeric;
  ALTER TABLE "_posts_v" ADD COLUMN "version_sort_order" numeric;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" DROP COLUMN "sort_order";
  ALTER TABLE "_posts_v" DROP COLUMN "version_sort_order";`)
}
