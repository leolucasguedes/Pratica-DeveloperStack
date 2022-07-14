import { prisma } from "../config/database.js";
import { CreateQuestionData } from "../services/questionService.js";

export async function createQuestion(question: CreateQuestionData) {
  await prisma.question.create({ data: question });
}
export async function getAllQuestions() {
  return await prisma.question.findMany();
}

export async function getQuestionById(id: number) {
  return await prisma.question.findUnique({
    where: { id },
    select: { id: true, question: true, answers: { select: { answer: true } } },
  });
}
