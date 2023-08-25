type Props = {
  icon: string
}

export default function Button(props: Props) {
  return (
    <button className="flex aspect-square h-full flex-col items-center border-b-2 border-l-4 border-r-2 border-t-4 border-b-zinc-500 border-l-zinc-200 border-r-zinc-500 border-t-zinc-200">
      <p className="text-black">{props.icon}</p>
    </button>
  )
}
