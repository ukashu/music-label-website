import React, { useCallback, useState, useRef, useEffect, RefObject, MouseEventHandler } from "react";

const id = (x: any) => x;

export const useDraggable = ({ onDrag = id } = {}): [RefObject<HTMLDivElement>, boolean, (e: React.MouseEvent<HTMLElement, MouseEvent> & {target: HTMLElement}) => void] => {

  const [pressed, setPressed] = useState(false);

  const position = useRef({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLElement, MouseEvent> & {target: HTMLElement}) => {

    if (!e.target) { return }

    e.target.style.userSelect = "none";
    setPressed(true);
  }, []);

  useEffect(() => {
    if (!pressed) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {

      if (!ref.current || !position.current) {
        return;
      }
      const pos = position.current;

      const elem = ref.current as HTMLElement;
      position.current = onDrag({
        x: pos.x + event.movementX,
        y: pos.y + event.movementY
      });
      elem.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    };
    const handleMouseUp = (e: MouseEvent & {target: HTMLElement}) => {
      e.target.style.userSelect = "auto";
      setPressed(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp as any); //Quick fix to stop TS from complaining
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp as any); //Quick fix to stop TS from complaining
    };
  }, [pressed, onDrag]);

  return [ref, pressed, handleMouseDown];
};