type Props = {
  name: string
  icon: string
}

export default function Icon(props: Props) {
  return (
    <div className=" flex flex-col items-center justify-between text-center text-2xl">
      <img src={props.icon} alt="Album icon" className=" h-16 w-16" />
      <p>{props.name}</p>
    </div>
  )
}
