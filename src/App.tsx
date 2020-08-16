import React, { useEffect, useState } from 'react';
import { getQuizAPI } from './Services/API';
import './App.css';
import { QuizType } from './Types/Quiz_Types';

function App() {
  let [quiz, setQuiz] = useState<QuizType[]>([]);

  useEffect(() => {
    async function fetchQuiz() {
      const quiz: QuizType[] = await getQuizAPI(5, 'easy');
      setQuiz(quiz);
      console.log(quiz);
    }

    fetchQuiz();
  }, []);

  return <div className='App'>Hello</div>;
}

export default App;
