import React, { useState, useEffect } from "react";
import "./Animation.css";


function Animation() {
     const [running, setRunning] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [ballType, setBallType] = useState("");

  const fieldWidth = 650;
  const fieldHeight = 400;
  const diameter = 75;
  const maxLeft = fieldWidth - diameter - 2;
  const maxTop = fieldHeight - diameter - 2;
  const vx = 5;
  const vy = 5;

  const runClick = () => {
    setRunning(!running);
  };

  const changeBallImage = (type) => {
    setBallType(type);
  };

  useEffect(() => {
    let interval;
    const calculate = () => {
      setX((prevX) => {
        if (goRight) {
          const newX = prevX + vx;
          if (newX >= maxLeft) {
            setGoRight(false);
          }
          return newX;
        } else {
          const newX = prevX - vx;
          if (newX <= 0) {
            setGoRight(true);
          }
          return newX;
        }
      });

      setY((prevY) => {
        if (goDown) {
          const newY = prevY + vy;
          if (newY >= maxTop) {
            setGoDown(false);
          }
          return newY;
        } else {
          const newY = prevY - vy;
          if (newY <= 0) {
            setGoDown(true);
          }
          return newY;
        }
      });

      setRotation((prevRotation) => prevRotation + 5);
    };

    if (running) {
      interval = setInterval(calculate, 25);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running, goRight, goDown, x, y, rotation]);

  return (
    <div id="container">
      <div id="field">
        <div
          id="ball"
          className={`${ballType} ${running ? "rotate" : ""}`}
          style={{
            left: `${x}px`,
            top: `${y}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        ></div>
      </div>
      <div id="control">
        <button
          id="run"
          className={`btn ${running ? "btn-danger" : "btn-success"}`}
          onClick={runClick}
        >
          <span
            className={`bi ${running ? "bi-pause-fill" : "bi-play-fill"}`}
          >
            &nbsp;{running ? "Pause" : "Run"}
          </span>
        </button>
        <span>
          <button
            id="basketballBtn"
            className={`btn ${ballType === "basketball" ? "btn-primary" : "btn-light"
              }`} style={{marginLeft:"0.2rem"}}
            onClick={() => changeBallImage("basketball")}
          >
            Basketball
          </button>
          <button
            id="footballBtn"
            className={`btn ${ballType === "football" ? "btn-primary" : "btn-light"
              }`} style={{marginLeft:"0.2rem"}}
            onClick={() => changeBallImage("football")}
          >
            Football
          </button>
          <button
            id="volleyballBtn"
            className={`btn ${ballType === "volleyball" ? "btn-primary" : "btn-light"
              }`} style={{marginLeft:"0.2rem"}}
            onClick={() => changeBallImage("volleyball")}
          >
            Volleyball
          </button>
          <button
            id="humanBtn"
            className={`btn ${ballType === "human" ? "btn-primary" : "btn-light"
              }`} style={{marginLeft:"0.2rem"}}
            onClick={() => changeBallImage("human")}
          >
            Human
          </button>
          <button
            id="cartoonBtn"
            className={`btn ${ballType === "cartoon" ? "btn-primary" : "btn-light"
              }`} style={{marginLeft:"0.2rem"}}
            onClick={() => changeBallImage("cartoon")}
          >
            Cartoon
          </button>
          <button
            id="logoBtn"
            className={ `btn ${ballType === "logo" ? "btn-primary" : "btn-light"
              }` } style={{marginLeft:"0.2rem"}}
            onClick={() => changeBallImage("logo")}
          >
            Logo
          </button>
        </span>
      </div>
    </div>
  );
}

export default Animation;