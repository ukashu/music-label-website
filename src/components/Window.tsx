import Button from "./Button"

type Props = {
  headerReference: React.RefObject<HTMLDivElement>
  dragOnMouseDown: (e: React.MouseEvent<HTMLElement, MouseEvent> & { target: HTMLElement }) => void
  header: string
}

export default function Window(props: Props) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max flex-col border-b-2 border-l-4 border-r-2 border-t-4 border-b-zinc-500 border-l-zinc-200 border-r-zinc-500 border-t-zinc-200"
      id="window"
      ref={props.headerReference}>
      <header
        className=" flex flex-row items-center justify-end gap-1 bg-zinc-400 p-1 text-lg"
        id="windowHeader"
        onMouseDown={props.dragOnMouseDown}>
        <p className="mb-0 mr-auto mt-0 p-0 text-lg leading-none">{props.header}</p>
        <Button icon="?" />
        <Button icon="x" />
      </header>
      <main className="flex-grow bg-black">
        <div className=" h-[500px] w-[500px]">CONTENT</div>
      </main>
    </div>
  )
}
