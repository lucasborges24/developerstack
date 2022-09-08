// TODO

import {
  postQuestion,
  getQuestions,
  getQuestionById,
} from "../repositories/questionRepository";
import { CreateQuestion } from "../types/questionTypes";

export const createQuestion = async (data: CreateQuestion) => {
  const a = await postQuestion(data);
  return a;
};

export const gettQuestions = async () => {
  const questions = await getQuestions();
  const object: object = {
    questions,
  };
  return object;
};

export const getById = async (id: number) => {
  const question = await getQuestionById(id);
  return question;
};
