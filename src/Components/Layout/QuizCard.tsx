import React, { useState } from 'react';
import { PropsQuizType } from '../../Types/Quiz_Types';

export const QuizCard: React.FC<PropsQuizType> = ({
  options,
  question,
  callback,
}) => {
  let [radioSelect, setRadioSelect] = useState('');

  const radioSelectHandler = (event: any) => {
    setRadioSelect(event.target.value);
  };

  return (
    <div className='quiz-container'>
      <p>{question}</p>

      <form
        onSubmit={(event: React.FormEvent<EventTarget>) =>
          callback(event, radioSelect)
        }
      >
        {options.map((option, index) => {
          return (
            <div key={index}>
              <label>
                <input
                  type='radio'
                  required
                  name='val'
                  value={option}
                  checked={radioSelect === option}
                  onChange={radioSelectHandler}
                />
                {option}
              </label>
            </div>
          );
        })}

        <button type='submit'>Next </button>
      </form>
    </div>
  );
};
