import "./index1.css";
import { useEffect, useState } from "react";

export const Cleanup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="counter">
        <p>My Subscribers WordPress</p>
        <div className="odometer" id="odometer">{count}</div>
        <h3 className="title">Subscriber <br /> Realtime Counter</h3>
      </div>
    </div>
  );
};
