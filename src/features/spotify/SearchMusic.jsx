import { useState, useEffect } from "react";
import { CLIENT_ID, CLIENT_SECRET } from "../../configs/env";
export default function SearchMusic() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  //SEARCH FUNCTION
  const search = async () => {
    console.log("Search for " + searchInput);

    // Get request using search to get the Artist ID
    const searchParameter = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    const artistId = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParameter
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    console.log("Artist Id is " + artistId);
    // Getrequest with Artist ID grab all the album from the artist
    const returnedAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistId +
        "/albums" +
        "?include_groups=album&market=US&limit=50",
      searchParameter
    )
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data.items);
      });
    // Display those albums to the USER
  };

  const handleChangeSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };

  useEffect(() => {
    // API ACCESS TOKEN
    const authParameter = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameter).then(
      (result) =>
        result.json().then((data) => setAccessToken(data.access_token))
    );
  }, []);
  return (
    <>
      {" "}
      <form action="" onSubmit={handleSubmit} className="mt-10">
        <div className="input-group w-full flex justify-center">
          <input
            type="text"
            placeholder="Search For Artist"
            className="input input-bordered w-2/3"
            onChange={handleChangeSearch}
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
      <div className="mt-10 ">
        <div className="grid grid-cols-4 gap-4">
          {albums.map((album, i) => {
            console.log(album);
            return (
              <div className="border-2 boder-black border-solid">
                <img src={album.images[0].url} alt="img" />
                <div>
                  <p>{album.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
