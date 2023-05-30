import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const rendredList = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));

  return (
    <div className="video-list
                    ui relaxed divided list
                    five wide column"
    >
      {rendredList}
    </div>
  );
};

export default VideoList;
