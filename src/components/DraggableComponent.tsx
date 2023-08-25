import React, { MouseEventHandler, useCallback } from "react";
import { useDraggable } from "../hooks/useDraggable.js";

export default function DraggableComponent() {
  // it's nice to have a way to at least prevent element from
  // getting dragged out of the page
  type position = {
    x: number,
    y: number
  }

  const handleDrag = useCallback(
    ({ x, y }: position) => ({x, y}), []);

  const [ref, pressed, handleMouseDown] = useDraggable({
    onDrag: handleDrag
  });

  return (
    <div className="absolute w-[1000px] h-[1000px] flex flex-col" id="window" ref={ref}>
      <header className=" bg-blue-600" id="windowHeader" onMouseDown={handleMouseDown}>
        HEADER
      </header>
      <main className=" bg-red-200 flex-grow">
        CONTENT
      </main>
    </div>
  );
};

// please, don't `export default`! it messes up autocompletion,
// usage search and regular text search in IDE!
// export default DraggableComponent
