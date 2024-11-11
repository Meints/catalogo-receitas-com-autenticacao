-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "Tags" AS ENUM ('VEGAN', 'VEGETARIAN', 'GLUTEN_FREE', 'DAIRY_FREE', 'LOW_CARB', 'SUGAR_FREE', 'HIGH_PROTEIN', 'RAW', 'QUICK_MEAL', 'LOW_CALORIE', 'SPICY', 'SWEET', 'SAVORY', 'DESSERT', 'BREAKFAST', 'SNACK', 'BUDGET_FRIENDLY', 'SMOOTHIE', 'SOUP', 'SALAD', 'GRILLED', 'BAKED', 'FRIED', 'FERMENTED', 'HEALTHY', 'GOURMET');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_likes" (
    "id" TEXT NOT NULL,
    "fk_user_id" TEXT NOT NULL,
    "fk_recipes_id" TEXT NOT NULL,

    CONSTRAINT "recipe_likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipes" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "prep_time" INTEGER NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),
    "instructions" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "tags" "Tags"[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_likes_fk_user_id_fk_recipes_id_key" ON "recipe_likes"("fk_user_id", "fk_recipes_id");

-- CreateIndex
CREATE UNIQUE INDEX "recipes_difficulty_key" ON "recipes"("difficulty");

-- AddForeignKey
ALTER TABLE "recipe_likes" ADD CONSTRAINT "recipe_likes_fk_user_id_fkey" FOREIGN KEY ("fk_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_likes" ADD CONSTRAINT "recipe_likes_fk_recipes_id_fkey" FOREIGN KEY ("fk_recipes_id") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipes" ADD CONSTRAINT "recipes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
