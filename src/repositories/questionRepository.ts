// TODO

import { prisma } from "../config/database";
import { CreateAnswer } from "../types/answerTypes";
import { CreateQuestion } from "../types/questionTypes";

export const postQuestion = async (data: CreateQuestion) => {
  const a = await prisma.questions.create({ data });
  return a;
};

export const postAnswer = async (data: CreateAnswer) => {
  const a = await prisma.answers.create({ data });
  return a;
};

export const getQuestions = async () => {
  const questions = await prisma.questions.findMany();
  return questions;
};

export const getQuestionById = async (id: number) => {
  const question = await prisma.questions.findUnique({
    where: {
      id: id,
    },
    select: {
      askedBy: true,
      question: true,
      Answers: true,
    }
  });
  return question;
};
