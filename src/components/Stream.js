import React, { Component } from 'react'

class Stream extends Component {
  render() {
    const { tracks = [] } = this.props

    return <div>
      {
        tracks.map((track, key) => {
          return <div key={ `track-${key}` } className="track">{ track.title }</div>
        })
      }
    </div>
  }
}

export default Stream
