import React, { Suspense, useEffect } from "react";
import axios from "axios";

const VideoList = React.lazy(() => import("./common-components/VideoList"));
const Videos = () => {
  const [videos, setVideos] = React.useState([]);
  const apikey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const youtube = import.meta.env.VITE_YOUTUBE_GET_LIST;
  const fetchVideos = async () => {
    const response = await axios.get(youtube, {
      params: {
        part: "snippet",
        maxResults: 10,
        chart: "mostPopular",
        q: "React tutorial",
        videoCategoryId: "1",
        key: apikey,
      },
    });
    const data = await response.data.items;
    return data;
  };
  useEffect(() => {
    const loadVideos = async () => {
      const data = await fetchVideos();
      setVideos(data);
    };
    loadVideos();
  }, []);
  console.log(videos);
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-2xl m-4 font-bold">Videos</h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Suspense fallback={<h2>Loading Videos...</h2>}>
          {videos && <VideoList videos={videos} />}
        </Suspense>
      </div>
    </div>
  );
};

export default Videos;
