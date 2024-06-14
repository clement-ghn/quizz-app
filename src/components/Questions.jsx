import React, { useState, useEffect } from 'react';
import Timer from './Timer.jsx';
import Answers from './Answers.jsx';
import QUESTIONS from '../questions.js';

export function Questions({ indice, onSelectAnswer, onSkipAnswer }) {
    
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[indice].answers[0] === answer
                });

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    } 

    if (indice >= QUESTIONS.length) {
        return <div>Invalid question index.</div>;
    }

    let answerState = '';
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    }else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return (
        <div id="question">
            <Timer timeout={10000} onTimeout={onSkipAnswer} />
            <h2>{QUESTIONS[indice]?.text || 'Question not found'}</h2>
            <Answers 
                answers={QUESTIONS[indice]?.answers || []}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}
