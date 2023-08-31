import shirtvid from "../videos/shirtvid.mp4"
import React from "react"
import { useSpinnable } from "../hooks/useSpinnable"

export default function MerchWindow() {
  type position = {
    x: number
  }

  const handleDrag = React.useCallback(({ x }: position) => ({ x }), [])
  const [ref, pressed, handleMouseDown] = useSpinnable({
    onDrag: handleDrag
  })

  return (
    <div className=" my-20 flex max-h-[100%] max-w-[1000px] items-center overflow-hidden">
      <div onMouseDown={handleMouseDown} className="m-0 flex w-1/2 flex-col overflow-hidden">
        <video ref={ref} autoPlay loop muted className=" min-h-[100%] overflow-hidden">
          <source src={shirtvid} type="video/mp4" />
        </video>
        <p className=" flex-grow-0 text-center text-2xl font-bold">{"↱↲"}</p>
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
  )
}
