export default function ListeningWindow() {
  return (
    <>
      <iframe
        style={{ borderRadius: "12px", width: "100%" }}
        src="https://open.spotify.com/embed/playlist/4ttL524hNmRAGZrEmjNNTF?utm_source=generator&theme=0"
        height="500"
        frameBorder="0"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
    </>
  )
}
