import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

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
  }, []);

  return (
    <>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", gap:"100px", border:"1px solid white", width:"450px",height:"40px", margin:"auto",backgroundColor:"#fbc50a", padding:"0,10px", borderRadius:"10px", marginTop:"50px"}}>
      <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/thunder_2.png?v=1655103798" alt="logo" /><b>Daily Deal</b>
      <h1>Ending In: {formatTimeToString(time)}</h1>
    </div>
    <Link to="/productitemspage"><Button bg={"red"} color={"white"} style={{display:"block",margin:"auto", marginTop:"10px"}}>View More</Button></Link>
    </>
  );
}
