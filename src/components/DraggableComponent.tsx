import { useCallback } from "react"
import { useDraggable } from "../hooks/useDraggable.js"
import WindowDark from "./WindowDark.js"

export default function DraggableComponent() {
  // it's nice to have a way to at least prevent element from
  // getting dragged out of the page
  type position = {
    x: number
    y: number
  }

  const handleDrag = useCallback(({ x, y }: position) => ({ x, y }), [])

  const [ref, pressed, handleMouseDown] = useDraggable({
    onDrag: handleDrag
  })

  return <WindowDark headerReference={ref} dragOnMouseDown={handleMouseDown} header="Merch" />
}

// please, don't `export default`! it messes up autocompletion,
// usage search and regular text search in IDE!
// export default DraggableComponent
