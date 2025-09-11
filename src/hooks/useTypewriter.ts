import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
}

interface UseRotatingTypewriterOptions {
  baseText: string;
  rotatingWords: string[];
  speed?: number;
  delay?: number;
  rotationInterval?: number;
}

export function useTypewriter({ 
  text, 
  speed = 50, 
  delay = 1000, 
  loop = false 
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, isComplete]);

  useEffect(() => {
    if (loop && isComplete) {
      const resetTimeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setIsComplete(false);
      }, delay);

      return () => clearTimeout(resetTimeout);
    }
  }, [isComplete, loop, delay]);

  return { displayText, isComplete };
}

export function useRotatingTypewriter({ 
  baseText, 
  rotatingWords, 
  speed = 30, 
  delay = 2000,
  rotationInterval = 1000
}: UseRotatingTypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const currentWord = rotatingWords[currentWordIndex];
  const fullText = baseText.replace('{word}', currentWord);

  useEffect(() => {
    if (isTyping && currentCharIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (isTyping && currentCharIndex === fullText.length) {
      // Finished typing current word, wait before switching
      const timeout = setTimeout(() => {
        setIsTyping(false);
        setCurrentCharIndex(0);
        setDisplayText('');
        setCurrentWordIndex(prev => (prev + 1) % rotatingWords.length);
      }, rotationInterval);

      return () => clearTimeout(timeout);
    } else if (!isTyping) {
      // Start typing next word
      setIsTyping(true);
    }
  }, [currentCharIndex, fullText, speed, isTyping, rotationInterval, rotatingWords.length]);

  return { displayText, isComplete: false };
}
