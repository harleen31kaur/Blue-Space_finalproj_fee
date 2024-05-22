import React from 'react'
import video from '/video.mp4'

const Video = () => {
  return (
    <div>
      <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
        </video>
    </div>
  )
}

export default Video
