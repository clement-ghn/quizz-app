import React from 'react';
import logo from '../assets/quiz-logo.png'

export default function Header() {
    return(
        <header>
            <img src={logo} alt="logo-quiz" />
            <h1>QuizzReact</h1>
        </header>
    )
}
