import SearchMusic from "./features/spotify/searchMusic";

function App() {
  return (
    <>
      <SearchMusic />
      <iframe
        title="Spotify Playlist"
        src="https://open.spotify.com/embed/playlist/2DQu4yw3Bx58eNEZYIevDl?utm_source=generator"
        width="100%"
        height="352"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  );
}

export default App;
