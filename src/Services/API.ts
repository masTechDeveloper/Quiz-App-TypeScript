import { QuizType, QuestionType } from '../Types/Quiz_Types';

const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const getQuizAPI = async (
  totalQ: number,
  level: string
): Promise<QuizType[]> => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${totalQ}&difficulty=${level}&type=multiple`
  );

  let { results } = await res.json();

  const quizReturn: QuizType[] = results.map((questionObj: QuestionType) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      option: shuffleArray(
        questionObj.incorrect_answers.concat(questionObj.correct_answer)
      ),
    };
  });

  return quizReturn;
};
