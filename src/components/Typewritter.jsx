import React, { useState, useEffect } from "react";

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 100); 
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
