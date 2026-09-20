import { useEffect, useRef, useState } from "react";
import "../styles/cursor-whisper.css";

const messages = [
  "oh hi there",
  "i see you are still looking",
  "curious one here",
  "Scroll just a bit more :)",
  "recruitments are open btw",
  "still looking",
  "okay im leaving now",
  "there is a secret message somewhere here — find it and you get a reward :)",
];

function CursorWhisper() {
  const whisperRef = useRef(null);
  const timerRef = useRef(null);
  const hideRef = useRef(null);

  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!whisperRef.current) return;

      whisperRef.current.style.left = `${event.clientX + 16}px`;
      whisperRef.current.style.top = `${event.clientY + 16}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let messageIndex = 0;

    const showNextMessage = () => {
      if (messageIndex >= messages.length) {
        return;
      }

      setMessage(messages[messageIndex]);
      setVisible(true);

      clearTimeout(hideRef.current);

      hideRef.current = setTimeout(() => {
        setVisible(false);
      }, 3000);

      messageIndex++;

      if (messageIndex < messages.length) {
        timerRef.current = setTimeout(showNextMessage, 7000);
      }
    };

    // First message appears after 3 seconds.
    timerRef.current = setTimeout(showNextMessage, 3000);

    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(hideRef.current);
    };
  }, []);

  return (
    <div
      ref={whisperRef}
      className={`cursor-whisper ${visible ? "show" : ""}`}
      aria-hidden="true"
    >
      <span className="whisper-dot"></span>
      <span>{message}</span>
    </div>
  );
}

export default CursorWhisper;