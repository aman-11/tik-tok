import React, { useEffect } from "react";
import axios from './axios';
import './App.css';
import Video from './Video'
import { useState } from 'react';
function App() {

      // crte state  and store videos
  const [videos, setVideos] = useState([]);
  
  //hooks  when app component load run cod
  useEffect(() => {

    //async func
    async function fetchPosts() {
      const response = await axios.get("/v2/posts")
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, [])//depedncy empty
  console.log(videos);
  return (
   
    //bem convention
    <div className="app">
      <div className="app_videos">
        {videos.map(({url,channel,description,song,likes,messages,shares}) => (
          <Video
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}
          />
        )
      )}
      </div>
    </div>
  );
}

export default App;
