import React, { Component } from 'react'

function Stream({ tracks = [] }) {
  return <div>
    {
      tracks.map((track, key) => {
        return <div key={ `track-${key}` } className="track">{ track.title }</div>
      })
    }
  </div>
}

export default Stream
