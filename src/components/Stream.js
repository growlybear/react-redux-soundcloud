import React, { Component } from 'react'
import { connect } from 'react-redux'

function Stream({ tracks = [] }) {
  return <div>
    {
      tracks.map((track, key) => {
        return <div key={ `track-${key}` } className="track">{ track.title }</div>
      })
    }
  </div>
}

function mapStateToProps(state) {
  const tracks = state.track
  return {
    tracks
  }
}

export default connect(mapStateToProps)(Stream)
