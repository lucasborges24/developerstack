import { Answers } from "@prisma/client";

export type CreateAnswer = Omit<Answers, "id">;

