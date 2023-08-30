import DraggableComponent from "../components/DraggableComponent.jsx"
import Icon from "../components/Icon.js"
import shirticon from "../images/shirticon.svg"
import headicon from "../images/headicon.svg"
import albumsicon from "../images/albumsicon.svg"
import DateTime from "../components/DateTime.js"
import React from "react"

export default function Desktop() {
  const [showWindow, setShowWindow] = React.useState(false)

  return (
    <>
      {showWindow && <DraggableComponent closeFunction={() => setShowWindow(false)} />}
      <div id="icons" className=" flex flex-row gap-16 p-20 blur-xxs">
        <Icon icon={headicon} name="Listen" />
        <Icon icon={albumsicon} name="Artists" />
        <Icon icon={shirticon} name="Merch" openFunction={() => setShowWindow((prevState) => !prevState)} />
      </div>
      <DateTime />
      <footer className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-lg text-zinc-500 blur-xxs">
        ukashu 2023
      </footer>
    </>
  )
}
