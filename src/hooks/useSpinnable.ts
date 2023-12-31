import React, { useCallback, useState, useRef, useEffect, RefObject, MouseEventHandler } from "react"

const id = (x: any) => x

export const useSpinnable = ({ onDrag = id } = {}): [
  RefObject<HTMLVideoElement>,
  boolean,
  (e: React.MouseEvent<HTMLDivElement, MouseEvent> & { target: HTMLDivElement }) => void
] => {
  const [pressed, setPressed] = useState(false)

  const position = useRef({ x: 0 })
  const ref = useRef<HTMLVideoElement>(null)

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent> & { target: HTMLDivElement }) => {
      if (!e.target) {
        return
      }

      e.target.style.userSelect = "none"
      ref.current?.pause()
      setPressed(true)
    },
    []
  )

  useEffect(() => {
    if (!pressed) {
      return
    }

    const elem = ref.current as HTMLVideoElement
    let startingPosition = 0
    const windowWidth = window.innerWidth
    const videoDuration = Math.round(elem.duration * 10) / 10

    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current || !position.current) {
        return
      }

      const pos = position.current

      position.current = onDrag({
        x: pos.x + event.movementX
      })

      const currentTime = Math.round(elem.currentTime * 10) / 10

      if (startingPosition === 0) {
        startingPosition = currentTime
      }

      const proportions = Math.floor((pos.x / windowWidth) * 100) / 100
      let timeStamp = Math.round((startingPosition + proportions * videoDuration) * 10) / 10
      if (timeStamp < 0) {
        timeStamp = videoDuration + timeStamp
      } else if (timeStamp > videoDuration) {
        timeStamp = timeStamp - videoDuration
      }
      if (currentTime !== timeStamp && timeStamp >= 0) {
        //console.log({ currentTime, timeStamp })
        //console.log("setting")
        elem.currentTime = timeStamp
      }
    }
    const handleMouseUp = (e: MouseEvent & { target: HTMLElement }) => {
      e.target.style.userSelect = "auto"
      ref.current?.play()
      position.current = { x: 0 }
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
