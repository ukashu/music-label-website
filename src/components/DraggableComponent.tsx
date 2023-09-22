import React, { useCallback } from "react"
import { useDraggable } from "../hooks/useDraggable.js"
import ButtonDark from "./ButtonDark.js"

type Props = {
  closeFunction: () => void
  children: React.ReactElement<any>
  header: string
  icon: string
  name: "merch" | "artists" | "listen"
  windowStack: Array<"merch" | "artists" | "listen">
  focus?: () => void
}

export default function DraggableComponent(props: Props) {
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

  function getZIndex(windowStack: Array<"merch" | "artists" | "listen">, name: "merch" | "artists" | "listen") {
    const index = windowStack.indexOf(name)
    switch (index) {
      case 0:
        return "z-50"
      case 1:
        return "z-40"
      case 2:
        return "z-30"
      default:
        return "z-30"
    }
  }

  const classString = `absolute bottom-0 left-0 right-0 top-0 ${getZIndex(
    props.windowStack,
    props.name
  )} m-auto flex h-max w-max flex-col border-b-2 border-l-4 border-r-2 border-t-4 border-b-zinc-500 border-l-zinc-200 border-r-zinc-500 border-t-zinc-200 blur-xxs`

  return (
    <>
      <div className={classString} id="window" onMouseDown={props.focus} ref={ref}>
        <header
          className="z-10 flex flex-row items-center justify-end gap-1 border-b-2 border-b-zinc-200 bg-black p-1 text-xl"
          id="windowHeader"
          onMouseDown={handleMouseDown}>
          <img src={props.icon} alt={props.header} className="h-8" />
          <p className="mb-0 mr-auto mt-0 p-0 text-2xl leading-none">{props.header}</p>
          <ButtonDark icon="?" />
          <ButtonDark icon="x" closeFunction={props.closeFunction} />
        </header>
        <main className="flex-grow bg-black">{props.children}</main>
      </div>
    </>
  )
}
