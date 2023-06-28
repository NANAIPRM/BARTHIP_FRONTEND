import React from 'react'
import ModalsReuse from './ModalsReuse'
import { useState, useEffect } from 'react'
import { CLIENT_ID, CLIENT_SECRET } from '../../configs/env'
import { IiMusicS } from '../../icons'

const handleClick = () => {}

function Music() {
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
