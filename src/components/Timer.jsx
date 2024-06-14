import {React, useEffect, useState} from 'react';


export default function Timer({timeout, onTimeout}) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect( ()=> {
        const timeoutReload = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timeoutReload);
        }

    }, [timeout, onTimeout]);

    useEffect( ()=> {
        const interval = setInterval( () => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        }

    }, []);

    return(
        <progress id='question-time' max={timeout} value={remainingTime}></progress>
    )
}