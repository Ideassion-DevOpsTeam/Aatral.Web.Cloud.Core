import React, { useEffect, useState } from "react";

function TypingEffect() {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // console.log("rerendering-typing");

  const typingSpeed = 200;
  const deletingSpeed = 500;

  useEffect(() => {
    const words = ["Ideas", "People"];
    const interval = setInterval(
      () => {
        if (isTyping) {
          const newText = words[currentIndex].substring(
            0,
            displayText.length + 1
          );
          setDisplayText(newText);

          if (newText === words[currentIndex]) {
            setIsTyping(false);
          }
        } else {
          const newText = words[currentIndex].substring(
            0,
            displayText.length - 1
          );
          setDisplayText(newText);

          if (newText === "") {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
            setIsTyping(true);
          }
        }
      },
      isTyping ? typingSpeed : deletingSpeed
    );

    return () => clearInterval(interval);
  }, [displayText, isTyping, currentIndex]);

  return (
    <>
      <span>{displayText}</span>
      <span className="bigger_cursor">I</span>
    </>
  );
}

export default TypingEffect;
