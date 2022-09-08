// TODO

import { postAnswer } from "../repositories/questionRepository";
import { CreateAnswer } from "../types/answerTypes";

export const createAnswer = async (data: CreateAnswer) => {
    const a = await postAnswer(data);
    return a;
} 