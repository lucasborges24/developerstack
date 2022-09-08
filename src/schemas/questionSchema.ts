import Joi from "joi";
import { CreateQuestion } from "../types/questionTypes";

export const questionSchema = Joi.object<CreateQuestion>({
  // export const questionSchema = Joi.object({
  askedBy: Joi.string().required(),
  question: Joi.string().required(),
});
