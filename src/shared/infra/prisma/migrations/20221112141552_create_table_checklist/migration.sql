-- CreateTable
CREATE TABLE "checklists" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "checklists_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "checklists" ADD CONSTRAINT "checklists_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
