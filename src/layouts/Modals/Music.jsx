import React from 'react'
import ModalsReuse from './ModalsReuse'
import { useState, useEffect } from 'react'
import { CLIENT_ID, CLIENT_SECRET } from '../../configs/env'
import { IiMusicS } from '../../icons'

const handleClick = () => {}

function Music() {
  const [searchInput, setSearchInput] = useState('')
  const [accessToken, setAccessToken] = useState('')
  const [albums, setAlbums] = useState([])

  const search = async () => {
    console.log('Search for ' + searchInput)

    // Get request using search to get the Artist ID
    const searchParameter = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    }

    const artistId = await fetch(
      'https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist',
      searchParameter
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id
      })

    console.log('Artist Id is ' + artistId)
    // Getrequest with Artist ID grab all the album from the artist
    const returnedAlbums = await fetch(
      'https://api.spotify.com/v1/artists/' +
        artistId +
        '/albums' +
        '?include_groups=album&market=US&limit=50',
      searchParameter
    )
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data.items)
      })
    // Display those albums to the USER
  }

  const handleChangeSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    search()
  }

  useEffect(() => {
    // API ACCESS TOKEN
    const authParameter = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'grant_type=client_credentials&client_id=' +
        CLIENT_ID +
        '&client_secret=' +
        CLIENT_SECRET,
    }
    fetch('https://accounts.spotify.com/api/token', authParameter).then(
      (result) =>
        result.json().then((data) => setAccessToken(data.access_token))
    )
  }, [])
  return (
    <div className="w-20" onClick={handleClick}>
      <ModalsReuse title={<IiMusicS />} header={'เสียง'}>
        <iframe
          title="Spotify Playlist"
          src="https://open.spotify.com/embed/playlist/2DQu4yw3Bx58eNEZYIevDl?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </ModalsReuse>
    </div>
  )
}

export default Music
