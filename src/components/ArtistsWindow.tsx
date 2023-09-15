import gruppen from "../images/gruppen.jpg"
import twlm from "../images/twlm.jpg"
import MEMORIS from "../images/MEMORIS.jpg"
import TiltingImage from "./TiltingImage"
import Tooltip from "./Tooltip"

export default function ArtistsWindow() {
  return (
    <>
      <div className=" m-10 grid max-h-[100%] max-w-[700px] grid-cols-3 gap-10">
        <Tooltip message="Karapa Korumia">
          <TiltingImage imageSrc={gruppen} />
        </Tooltip>
        <Tooltip message="praaven">
          <TiltingImage imageSrc={twlm} />
        </Tooltip>
        <Tooltip message="MEMORIS">
          <TiltingImage imageSrc={MEMORIS} />
        </Tooltip>
      </div>
    </>
  )
}
