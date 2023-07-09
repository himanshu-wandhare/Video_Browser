import React from "react";

const VideoDetail = ({ video }) => {
  return !video ? (
    <div class="ui segment" style={{height:"100vh", width: "100%"}}>
      <div class="ui active inverted dimmer">
        <div class="ui massive text loader">Loading...</div>
      </div>
    </div>
  ) : (
    <div className="eleven wide column">
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.snippet.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
