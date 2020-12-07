import { useEffect, useRef } from "react";
import "./Counter.css";

type VoidHandler = (...args: any[]) => void;

/**
 * @param callback - Function that will be called every `delay` ms.
 * @param delay - Number representing the delay in ms. Set to `null` to "pause" the interval.
 * @example const [value, setValue] = React.useState(0);
  useInterval(() => {
    let newValue = value + 1;
    setValue(newValue);
  }, 200);}
 */
export const useInterval = (callback: VoidHandler, delay?: number) => {
  const savedCallbackRef = useRef<VoidHandler>();
  useEffect(() => {
    savedCallbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (...args: any[]) => savedCallbackRef.current!(...args);
    if (delay !== null) {
      const intervalId = setInterval(handler, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
};