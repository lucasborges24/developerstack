import { Questions } from "@prisma/client";

export type CreateQuestion = Omit<Questions, "id">;
