import React, { useEffect } from 'react';
import { getQuizAPI } from './Services/API';
import './App.css';

function App() {
  useEffect(() => {
    async function fetchQuiz() {
      const quiz = await getQuizAPI(5, 'easy');
      console.log(quiz);
    }

    fetchQuiz();
  }, []);

  return <div>Hello</div>;
}

export default App;
