import React, { useEffect, useState } from 'react';
import '../styles/TextAnimation.css';

export default function TextAnimation({ text, css, timeout1, timeout2, timeout3 }) {
    const [visible, setVisible] = useState(true);
    const [letterCount, setLetterCount] = useState(1);
    const [waiting, setWaiting] = useState(false);
  
    useEffect(() => {
      const interval1 = setInterval(() => {
        if (letterCount === 0 && !waiting) {
          setWaiting(true);
          setLetterCount(1);
  
          setTimeout(() => {
            setWaiting(false);
          }, timeout1); arance
        } else if (letterCount === text.length + 1 && !waiting) {
          setWaiting(true);
  
          setTimeout(() => {
            setLetterCount((prevCount) => prevCount - 1);
            setWaiting(false);
          }, timeout1);
        } else if (!waiting) {
          setLetterCount((prevCount) => prevCount + 1);
        }
      }, timeout2);
  
      const interval2 = setInterval(() => {
        setVisible((prevVisible) => !prevVisible);
      }, timeout3); 
  
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
      };
    }, [letterCount, waiting, text]);
  
    return (
      <div className={css}>
        {text.substring(0, letterCount)}
        <span className={`console-underscore ${visible ? '' : 'hidden'}`}></span>
      </div>
    );
  }

