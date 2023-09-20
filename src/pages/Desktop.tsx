import DraggableComponent from "../components/DraggableComponent.jsx"
import Icon from "../components/Icon.js"
import shirticon from "../images/shirticon.svg"
import headicon from "../images/headicon.svg"
import albumsicon from "../images/albumsicon.svg"
import ttticon from "../images/ttticon.svg"
import DateTime from "../components/DateTime.js"
import { useState } from "react"
import MerchWindow from "../components/MerchWindow.js"
import ArtistsWindow from "../components/ArtistsWindow.js"
import ListeningWindow from "../components/ListeningWindow.js"
import BarcodeLogo from "../components/BarcodeLogo.js"

export default function Desktop() {
  //combine states into one TODO
  const [showMerch, setShowMerch] = useState(false)
  const [showArtists, setShowArtists] = useState(false)
  const [showListen, setShowListen] = useState(false)
  const [zIndex, setZIndex] = useState({
    merch: 30,
    artists: 30,
    listen: 30
  })

  console.log({ zIndex })

  function openWindow(header: "merch" | "artists" | "listen") {
    switch (header) {
      case "merch":
        setShowMerch(true)
        focusWindow("merch")
        break
      case "artists":
        setShowArtists(true)
        focusWindow("artists")
        break
      case "listen":
        setShowListen(true)
        focusWindow("listen")
        break
      default:
        return
    }
  }

  function focusWindow(header: "merch" | "artists" | "listen") {
    let indexes = {
      merch: 30,
      artists: 30,
      listen: 30
    }
    indexes[header] = 40
    setZIndex(indexes)
  }

  return (
    <>
      {showMerch && (
        <DraggableComponent
          header="Merch"
          closeFunction={() => setShowMerch(false)}
          focus={() => focusWindow("merch")}
          zIndex={zIndex.merch}
          icon={shirticon}>
          <MerchWindow />
        </DraggableComponent>
      )}
      {showArtists && (
        <DraggableComponent
          header="Artists"
          closeFunction={() => setShowArtists(false)}
          focus={() => focusWindow("artists")}
          zIndex={zIndex.artists}
          icon={albumsicon}>
          <ArtistsWindow />
        </DraggableComponent>
      )}
      {showListen && (
        <DraggableComponent
          header="Listen [LOUDNESS WARNING]"
          closeFunction={() => setShowListen(false)}
          focus={() => focusWindow("listen")}
          zIndex={zIndex.listen}
          icon={headicon}>
          <ListeningWindow />
        </DraggableComponent>
      )}
      <div id="icons" className=" flex flex-row gap-16 p-20 blur-xxs">
        <Icon icon={headicon} name="Listen" openFunction={() => openWindow("listen")} />
        <Icon icon={albumsicon} name="Artists" openFunction={() => openWindow("artists")} />
        <Icon icon={shirticon} name="Merch" openFunction={() => openWindow("merch")} />
        <Icon icon={ttticon} name="Merch" />
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
