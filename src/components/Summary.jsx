import React from "react";
import logoEnd from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js'
import Answers from "./Answers.jsx";


export default function Summary({userAnswers, counter}){
    const skippedAnswers = userAnswers.filter(answer => answer === null)
    const correctAnswers = userAnswers.filter((answer,index) => answer === QUESTIONS[index].answers[0])

    const skippedAnswersShare = Math.round ((skippedAnswers.length / userAnswers.length) *100);
    const correctAnswersShare = Math.round ((correctAnswers.length / userAnswers.length) *100);
    const wrongAnswersShare = 100 -correctAnswersShare - skippedAnswersShare;


    return(
        <div id='summary'>
            <img src={logoEnd} alt='Quiz Complete' />
            <h2>Congrats!</h2>

            <div id="summary-stats">
            <p>
                <span className="number">{skippedAnswersShare}%</span>
                <span className="text">skipped</span>
            </p>   
            <p>
                <span className="number">{correctAnswersShare}%</span>
                <span className="text">answered correctly</span>
            </p>    
            <p>
                <span className="number">{wrongAnswersShare}%</span>
                <span className="text">answered wrong</span>
            </p>     
            </div>        
            <ol>
                {userAnswers.map((answer,index) =>{
                    let cssClass = "user-answer";

                    if (answer === null){
                        cssClass += ' skipped';
                    }else if(answer === QUESTIONS[index].answers[0]){
                        cssClass += ' correct';
                    }else{
                        cssClass += ' wrong'
                    }

                    return(
                    <li key={index}>
                        <h3>{index + 1}</h3>
                        <p className="question">{QUESTIONS[index].text}</p>
                        <p className={cssClass}>{answer ?? 'Skipped'}</p>
                    </li>
                    );
                })}
                
            </ol>
        
        </div>
    )
}