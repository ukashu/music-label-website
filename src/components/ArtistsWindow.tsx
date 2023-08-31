import gruppen from "../images/gruppen.jpg"
import twlm from "../images/twlm.jpg"
import MEMORIS from "../images/MEMORIS.jpg"
import TiltingImage from "./TiltingImage"

export default function ArtistsWindow() {
  return (
    <div className=" m-10 grid max-h-[100%] max-w-[700px] grid-cols-3 gap-10">
      {/* <img src={gruppen} />
      <img src={gruppen} />
      <img src={gruppen} /> */}
      <TiltingImage imageSrc={gruppen} />
      <TiltingImage imageSrc={twlm} />
      <TiltingImage imageSrc={MEMORIS} />
    </div>
  )
}
