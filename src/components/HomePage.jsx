import React, { useEffect, useRef, useState } from "react";
import "./HomePage.css";

function HomePage() {
  
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer === 0) return

    const interval = setInterval(() => {
      setTimer(timer - 1)
    }, 1000);

    return () => {
      clearInterval(interval)
    };
  }, [timer]);

  const handleClick = () => {
        setTimer(10)
        setCount(0)
    } 

  return (
    <div className="home-container">
      <div className="home-timer">Temps:{timer}</div>
      <div className="home-count">{count}</div>

      <button
           className="home-btn-start btn"
           onClick={handleClick}
           disabled={timer !== 0 }
      >
        Commencer
      </button>

      <button
        className="home-btn-click btn"
        onClick={() => setCount(count + 1)}
        disabled={timer === 0}
      >
        Gagner 
      </button>
      <button
        className="home-btn-reset btn"
        onClick={() => {
          setCount(0);
          setTimer(0);
        }}
      >
        Rejouer
      </button>
    </div>
  );
}

export default HomePage;
