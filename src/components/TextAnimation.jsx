import React, { useEffect, useState } from 'react';
import '../styles/TextAnimation.css';

export default function TextAnimation({ text, css }) {
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
          }, 500); arance
        } else if (letterCount === text.length + 1 && !waiting) {
          setWaiting(true);
  
          setTimeout(() => {
            setLetterCount((prevCount) => prevCount - 1);
            setWaiting(false);
          }, 500);
        } else if (!waiting) {
          setLetterCount((prevCount) => prevCount + 1);
        }
      }, 60);
  
      const interval2 = setInterval(() => {
        setVisible((prevVisible) => !prevVisible);
      }, 200); 
  
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

