import DraggableComponent from "../components/DraggableComponent.jsx"
import Icon from "../components/Icon.js"
import shirticon from "../images/shirticon.svg"
import headicon from "../images/headicon.svg"
import albumsicon from "../images/albumsicon.svg"
import DateTime from "../components/DateTime.js"
import React from "react"
import MerchWindow from "../components/MerchWindow.js"
import ArtistsWindow from "../components/ArtistsWindow.js"
import ListeningWindow from "../components/ListeningWindow.js"
import BarcodeLogo from "../components/BarcodeLogo.js"

export default function Desktop() {
  //combine states into one TODO
  const [showMerch, setShowMerch] = React.useState(false)
  const [showArtists, setShowArtists] = React.useState(true)
  const [showListen, setShowListen] = React.useState(false)

  return (
    <>
      {showMerch && (
        <DraggableComponent header="Merch" closeFunction={() => setShowMerch(false)} icon={shirticon}>
          <MerchWindow />
        </DraggableComponent>
      )}
      {showArtists && (
        <DraggableComponent header="Artists" closeFunction={() => setShowArtists(false)} icon={albumsicon}>
          <ArtistsWindow />
        </DraggableComponent>
      )}
      {showListen && (
        <DraggableComponent
          header="Listen [LOUDNESS WARNING]"
          closeFunction={() => setShowListen(false)}
          icon={headicon}>
          <ListeningWindow />
        </DraggableComponent>
      )}
      <div id="icons" className=" flex flex-row gap-16 p-20 blur-xxs">
        <Icon icon={headicon} name="Listen" openFunction={() => setShowListen((prevState) => !prevState)} />
        <Icon icon={albumsicon} name="Artists" openFunction={() => setShowArtists((prevState) => !prevState)} />
        <Icon icon={shirticon} name="Merch" openFunction={() => setShowMerch((prevState) => !prevState)} />
      </div>
      <div id="datetime" className=" absolute right-20 top-20 text-2xl blur-xxs">
        <BarcodeLogo />
        <DateTime />
      </div>

      <footer className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-lg text-zinc-500">
        ukashu 2023
      </footer>
    </>
  )
}
