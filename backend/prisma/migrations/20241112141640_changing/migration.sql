/*
  Warnings:

  - The primary key for the `recipes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `recipes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `fk_recipes_id` on the `recipe_likes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "recipe_likes" DROP CONSTRAINT "recipe_likes_fk_recipes_id_fkey";

-- AlterTable
ALTER TABLE "recipe_likes" DROP COLUMN "fk_recipes_id",
ADD COLUMN     "fk_recipes_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "recipes" DROP CONSTRAINT "recipes_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "recipes_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_likes_fk_user_id_fk_recipes_id_key" ON "recipe_likes"("fk_user_id", "fk_recipes_id");

-- AddForeignKey
ALTER TABLE "recipe_likes" ADD CONSTRAINT "recipe_likes_fk_recipes_id_fkey" FOREIGN KEY ("fk_recipes_id") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
