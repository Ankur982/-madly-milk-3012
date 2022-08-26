import { useRef, useState } from "react";

const addZeroToNumber = (time) => (time < 10 ? "0" + time : time);

const formatTimeToString = (time) => {
  const second = time % 60;
  const min = Math.floor(time / 60) % 60;
  const hrs = Math.floor(time / 60 / 60) % 60;
  return `${addZeroToNumber(hrs)}:${addZeroToNumber(min)}:${addZeroToNumber(
    second
  )}`;
};

export default function Timer() {
  const [time, setTime] = useState(10000);
  const ref = useRef(null);
  const startTimer = () => {
    if (ref.current !== null) return;
    ref.current = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
  };

  useState(() => {
    startTimer()
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <h1>{formatTimeToString(time)}</h1>
    </div>
  );
}
