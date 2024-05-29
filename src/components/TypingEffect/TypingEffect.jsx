import React, {
  Fragment,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";

function TypingEffect() {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // console.log("rerendering-typing");

  const words = useMemo(() => {
    return ["Ideas", "People", "Opportunities"];
  }, []);

  const typingSpeed = 200;
  const deletingSpeed = 500;

  const handleTyping = useCallback(() => {
    const newText = words[currentIndex].substring(0, displayText.length + 1);
    setDisplayText(newText);

    if (newText === words[currentIndex]) {
      setIsTyping(false);
    }
  }, [currentIndex, displayText.length, words]);

  const handleDeleting = useCallback(() => {
    const newText = words[currentIndex].substring(0, displayText.length - 1);
    setDisplayText(newText);
    if (newText === "") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      setIsTyping(true);
    }
  }, [currentIndex, displayText.length, words]);

  useEffect(() => {
    const interval = setInterval(
      () => {
        isTyping ? handleTyping() : handleDeleting();
      },
      isTyping ? typingSpeed : deletingSpeed
    );

    return () => clearInterval(interval);
  }, [isTyping, handleDeleting, handleTyping]);

  return (
    <Fragment>
      <span>{displayText}</span>
      <span className="bigger_cursor">I</span>
    </Fragment>
  );
}

export default TypingEffect;
