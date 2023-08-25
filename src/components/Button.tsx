type Props = {
  icon: string
}

export default function Button(props: Props) {
  return (
    <button className="flex h-full flex-col items-center border-b-2 border-l-4 border-r-2 border-t-4 border-b-zinc-500 border-l-zinc-200 border-r-zinc-500 border-t-zinc-200 shadow-[2px_2px_0_rgba(0,0,0,1)]">
      <p className="m-0 px-2 py-0 text-lg leading-none text-black">{props.icon}</p>
    </button>
  )
}
