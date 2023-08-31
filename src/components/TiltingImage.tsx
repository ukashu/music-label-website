type Props = {
  imageSrc: string
}

export default function TiltingImage(props: Props) {
  return (
    <div className="relative h-[200px] max-h-[200px] w-[200px] max-w-[200px]">
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <img src={props.imageSrc} className="box-contents" />
    </div>
  )
}
