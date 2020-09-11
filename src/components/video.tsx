import React from "react"

const Video = ({ videoSrcURL, videoTitle}) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture fullscreen"
      frameBorder="0"
    />
  </div>
)
export default Video