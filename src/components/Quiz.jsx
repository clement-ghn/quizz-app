import React, { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import { Questions } from './Questions.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const actualQuestion = userAnswers.length;
    const quizComplete = actualQuestion === QUESTIONS.length;

    const handleSelectAnswer = useCallback((actualAnswer) => {
        setUserAnswers(prevUserAnswers => [...prevUserAnswers, actualAnswer]);
    }, []);

    const skipAnswer = useCallback(
        () => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizComplete) {
        return (
            <Summary userAnswers={userAnswers}/>
        );
    }

    return (
        <div id='quiz'>
            <Questions  
                key={actualQuestion}
                indice={actualQuestion}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={skipAnswer}
            />
        </div>
    );
}
