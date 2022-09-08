import Joi from "joi";
import { CreateAnswer } from "../types/answerTypes";

export const answerSchema = Joi.object<CreateAnswer>({
  // export const answerSchema = Joi.object({
  answeredBy: Joi.string().required(),
  answer: Joi.string().required(),
});
