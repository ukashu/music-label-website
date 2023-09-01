type Props = {
  name: string
  icon: string
  openFunction?: () => void
}

export default function Icon(props: Props) {
  return (
    <div
      onClick={props.openFunction}
      className=" flex flex-col items-center justify-between text-center text-2xl hover:animate-pulse hover:cursor-pointer">
      <img src={props.icon} alt="Album icon" className=" h-16 w-16" id="icon" />
      <p>{props.name}</p>
    </div>
  )
}
