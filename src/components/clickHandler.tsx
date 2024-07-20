import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/click.png";

export function ClickHandler(props: {
  balanceRef: React.MutableRefObject<{ value: number }>;
  increment: number;
  energy: number;
  maxEnergy: number;
  setEnergy: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [texts, setTexts] = useState<
    Array<{
      id: number;
      value: string;
      position: { x: number; y: number };
      opacity: number;
    }>
  >([]);
  const textIdRef = useRef(0); // To keep track of unique IDs for each text

  const fadeOutText = (id: number) => {
    setTexts((prevTexts) =>
      prevTexts.map((text) => (text.id === id ? { ...text, opacity: 0 } : text))
    );
  };

  const handleClickText = (event: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = event;
    const newText = {
      id: textIdRef.current++,
      value: `+${props.increment}`,
      position: { x: clientX, y: clientY },
      opacity: 1,
    };

    setTexts((prevTexts) => [...prevTexts, newText]);

    // Start the fade-out process for the new text
    setTimeout(() => {
      fadeOutText(newText.id);
    }, 500);
  };

  function handleClick() {
    if (props.energy >= props.increment) {
      props.balanceRef.current.value =
        Math.round((props.balanceRef.current.value + props.increment) * 100) /
        100;
      props.setEnergy((prevEnergy) => prevEnergy - props.increment);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTexts((prevTexts) =>
        prevTexts.map((text) => ({
          ...text,
          position: { ...text.position, y: text.position.y - 1 },
        }))
      );
    }, 10);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timeoutIds = texts.map((text) =>
      setTimeout(() => {
        setTexts((prevTexts) => prevTexts.filter((t) => t.id !== text.id));
      }, 1000)
    );

    // Clean up timeouts on component unmount or when texts change
    return () => timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
  }, [texts]);

  return (
    <>
      <img
        onClick={(e) => {
          handleClick();
          handleClickText(e);
        }}
        src={logo}
        alt="logo"
        className="logoImg"
        title="Click me!"
        draggable="false"
        style={{ userSelect: "none" }}
      />
      {texts.map((text) => (
        <div
          key={text.id}
          style={{
            color: "#fff",
            fontSize: "40px",
            position: "absolute",
            top: text.position.y - 30,
            left: text.position.x - 16,
            padding: "5px",
            zIndex: 9999,
            pointerEvents: "none",
            transition: "opacity 0.5s ease", // Add a smooth fading transition
            opacity: text.opacity,
          }}
        >
          {text.value}
        </div>
      ))}
      <div
        style={{
          position: "relative",
          bottom: -13,
          color: " #ffffffbe",
          fontSize: 26,
          fontWeight: 500,
          letterSpacing: 2,
        }}
      >
        Energy : <span></span>
        {props.energy}/{props.maxEnergy}
      </div>
    </>
  );
}
