import React from "react";

// Define the type for video items if you know the shape of each video object
type Video = {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
};

type VideoListProps = {
  videos: Video[];
};

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  return (
    <div>
      {videos.length > 0 ? (
        videos.map((video, index) => (
          <iframe
            width="460"
            height="315"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))
      ) : (
        <h2>Nothing found</h2>
      )}
    </div>
  );
};

export default VideoList;

{
  /* <div key={video.id + 2 * index} className="flex flex-col ">
              <img
                width="350"
                height="280"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <p>{video.snippet.title}</p>
            </div> */
}
