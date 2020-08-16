import React, { useEffect, useState } from 'react';
import { getQuizAPI } from './Services/API';
import './App.css';
import { QuizType } from './Types/Quiz_Types';
import { QuizCard } from './Components/Layout/QuizCard';

function App() {
  let [quiz, setQuiz] = useState<QuizType[]>([]);
  let [quizCount, setQuizCount] = useState(0);
  let [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchQuiz() {
      const quiz: QuizType[] = await getQuizAPI(5, 'easy');
      setQuiz(quiz);
      console.log(quiz);
    }

    fetchQuiz();
  }, []);

  const submitHandler = (
    e: React.FormEvent<EventTarget>,
    selectedAns: string
  ) => {
    console.log(selectedAns);
    e.preventDefault();

    const currentQuestion: QuizType = quiz[quizCount];

    if (selectedAns === currentQuestion.answer) {
      setScore(++score);
    }

    if (quizCount !== quiz.length - 1) {
      setQuizCount(++quizCount);
    } else {
      alert('Finish');
      setQuizCount(0);

      // Calc Percentage
      let perc = (100 / quiz.length) * score;
      console.log(perc + '%');

      setScore(0);
    }
  };

  if (!quiz.length) return <h3 className='App'>Loading ...</h3>;

  return (
    <div className='App'>
      <p>{score}</p>
      <QuizCard
        options={quiz[quizCount].option}
        question={quiz[quizCount].question}
        callback={submitHandler}
      />
    </div>
  );
}

export default App;
