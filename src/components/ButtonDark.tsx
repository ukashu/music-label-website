type Props = {
  icon: string
  closeFunction?: () => void
}

export default function ButtonDark(props: Props) {
  return (
    <>
      {props.icon === "x" ? (
        <button
          onClick={props.closeFunction}
          className="flex h-full flex-col items-center border-b-2 border-l-4 border-r-2 border-t-4 border-b-zinc-500 border-l-zinc-200 border-r-zinc-500 border-t-zinc-200 shadow-[2px_2px_0_rgba(0,0,0,1)] duration-300 hover:border-b-red-500 hover:border-l-red-200 hover:border-r-red-500 hover:border-t-red-200">
          <p className="m-0 px-2 py-0 text-2xl leading-none duration-300 hover:text-red-500">{props.icon}</p>
        </button>
      ) : (
        <button className="flex h-full flex-col items-center border-b-2 border-l-4 border-r-2 border-t-4 border-b-zinc-500 border-l-zinc-200 border-r-zinc-500 border-t-zinc-200 shadow-[2px_2px_0_rgba(0,0,0,1)] duration-300 hover:border-b-green-500 hover:border-l-green-200 hover:border-r-green-500 hover:border-t-green-200">
          <p className="m-0 px-2 py-0 text-2xl leading-none duration-300 hover:text-green-500">{props.icon}</p>
        </button>
      )}
    </>
  )
}
