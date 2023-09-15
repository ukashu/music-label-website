export default function ListeningWindow() {
  return (
    <div className=" h-[50vh] bg-zinc-800">
      <iframe
        style={{ borderRadius: "12px", width: "100%", height: "100%" }}
        src="https://open.spotify.com/embed/playlist/4ttL524hNmRAGZrEmjNNTF?utm_source=generator&theme=0"
        frameBorder="0"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
    </div>
  )
}
