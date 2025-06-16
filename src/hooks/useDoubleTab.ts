
import { useRef } from 'react';

export const useDoubleTab = (onDoubleTab: () => void, delay: number = 300) => {
  const lastTapRef = useRef<number>(0);

  const handleTab = () => {
    const now = Date.now();
    if (now - lastTapRef.current < delay) {
      onDoubleTab();
    }
    lastTapRef.current = now;
  };

  return handleTab;
};
