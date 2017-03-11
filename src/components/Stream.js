import React, { Component } from 'react'

class Stream extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    const { tracks = [] } = this.props

    return <div>
      {
        tracks.map((track, key) => {
          return <div key={ `track-${key}` } className="track">
            { track.title }
            <button tpye="button" onClick={() => this.setState({ [key] : !this.state[key] })}>
              { this.state[key] ? 'Dislike' : 'Like' }
            </button>
          </div>
        })
      }
    </div>
  }
}

export default Stream
