import { Request, Response } from "express";
import * as questionService from "../services/questionService";
import * as answerService from "../services/answerService";

export async function createQuestion(req: Request, res: Response) {
  // TODO
  const data = {
    askedBy: req.body.askedBy,
    question: req.body.question,
  };
  const a = await questionService.createQuestion(data);
  res.status(201).send(a);
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
  const { id } = req.params;
  const data = {
    answeredBy: req.body.answeredBy as string,
    answer: req.body.answer as string,
    questionId: Number(id),
  };
  const newData = await answerService.createAnswer(data);
  res.status(201).send(newData);
}

export async function get(req: Request, res: Response) {
  // TODO
  const questions = await questionService.gettQuestions();
  res.send(questions);
}

export async function getById(req: Request, res: Response) {
  // TODO
  const { id } = req.params;
  const question = await questionService.getById(Number(id));
  res.send(question);
}
