import ButtonDark from "./ButtonDark"
import shirtvid from "../videos/shirtvid.mp4"

type Props = {
  headerReference: React.RefObject<HTMLDivElement>
  dragOnMouseDown: (e: React.MouseEvent<HTMLElement, MouseEvent> & { target: HTMLElement }) => void
  header: string
}

export default function WindowDark(props: Props) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-0 z-0 m-auto flex h-max w-max flex-col border-b-2 border-l-4 border-r-2 border-t-4 border-b-zinc-500 border-l-zinc-200 border-r-zinc-500 border-t-zinc-200 blur-xxs"
      id="window"
      ref={props.headerReference}>
      <header
        className="z-10 flex flex-row items-center justify-end gap-1 border-b-2 border-b-zinc-200 bg-black p-1 text-xl"
        id="windowHeader"
        onMouseDown={props.dragOnMouseDown}>
        <p className="mb-0 mr-auto mt-0 p-0 text-2xl leading-none">{props.header}</p>
        <ButtonDark icon="?" />
        <ButtonDark icon="x" />
      </header>
      <main className="flex-grow bg-black">
        <div className=" my-20 flex w-[1000px] items-center overflow-hidden">
          <div className="m-0 flex w-1/2 flex-col overflow-hidden">
            <video autoPlay loop muted className=" min-h-[100%] overflow-hidden">
              <source src={shirtvid} type="video/mp4" />
            </video>
            <p className=" flex-grow-0 text-center text-xl font-bold">{"<->"}</p>
          </div>
          <div className=" flex w-1/2 flex-col px-20 text-xl">
            <p className=" text-center text-2xl font-bold">Unisex Tee</p>
            <p>100% authentic nightmode merchendise</p>
            <ul style={{ listStyle: "square" }}>
              <li>Adult Unisex 100% Cotton T-Shirt</li>
              <li>White braille puff print and screen print on front</li>
              <li>White screen print on back</li>
              <li>Woven patch on sleeve</li>
              <li>Garment runs true-to-size</li>
              <li>Produced and Printed in Los Angeles, CA</li>
            </ul>
            <p>Ships between 3-5 business days.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
