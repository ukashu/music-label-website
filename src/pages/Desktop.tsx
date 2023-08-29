import DraggableComponent from "../components/DraggableComponent.jsx"
import Icon from "../components/Icon.js"
import shirticon from "../images/shirticon.svg"
import headicon from "../images/headicon.svg"
import albumsicon from "../images/albumsicon.svg"

export default function Desktop() {
  return (
    <>
      <DraggableComponent />
      <div id="icons" className=" flex flex-row gap-16 p-20">
        <Icon icon={headicon} name="Listen" />
        <Icon icon={albumsicon} name="Artists" />
        <Icon icon={shirticon} name="Merch" />
      </div>
    </>
  )
}
