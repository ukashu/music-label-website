import React, { useCallback, useState, useRef, useEffect, RefObject, MouseEventHandler } from "react"

const id = (x: any) => x

export const useSpinnable = ({ onDrag = id } = {}): [
  RefObject<HTMLVideoElement>,
  boolean,
  (e: React.MouseEvent<HTMLElement, MouseEvent> & { target: HTMLElement }) => void
] => {
  const [pressed, setPressed] = useState(false)

  const position = useRef({ x: 0 })
  const ref = useRef<HTMLVideoElement>(null)

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLElement, MouseEvent> & { target: HTMLElement }) => {
    if (!e.target) {
      return
    }

    e.target.style.userSelect = "none"
    setPressed(true)
  }, [])

  useEffect(() => {
    if (!pressed) {
      return
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current || !position.current) {
        return
      }
      const pos = position.current

      const elem = ref.current as HTMLVideoElement
      position.current = onDrag({
        x: pos.x + event.movementX
      })
      const videoDuration = elem.duration
      const currentTime = elem.currentTime
      const windowWidth = window.innerWidth
      const proportions = Math.floor((event.clientX / windowWidth) * 100) / 100
      const timeStamp = Math.round(proportions * videoDuration * 100) / 100
      console.log({ proportions, timeStamp })
      elem.currentTime = timeStamp
      //elem.style.transform = `translate(${pos.x}px, px)`;
    }
    const handleMouseUp = (e: MouseEvent & { target: HTMLElement }) => {
      e.target.style.userSelect = "auto"
      setPressed(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp as any) //Quick fix to stop TS from complaining
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp as any) //Quick fix to stop TS from complaining
    }
  }, [pressed, onDrag])

  return [ref, pressed, handleMouseDown]
}
