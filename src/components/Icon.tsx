type Props = {
  name: string
  icon: string
}

export default function Icon(props: Props) {
  return (
    <div className=" flex flex-col items-center justify-between text-center">
      <img src={props.icon} alt="Album icon" className=" blur-xs h-20 w-20" />
      <p>{props.name}</p>
    </div>
  )
}
