import React, { useRef, useState } from 'react';
import "./video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url, channel, description, song,likes,shares,messages}) {
    const [playing, setPlaying] = useState(false);  //create state or variable  ( init it is not playing)
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        ////if video playing
        //stop it
        //to keep track video is paLYING
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        //otherwise if it is not playin
        // play it..
        else {
            videoRef.current.play();
            setPlaying(true);
        }
        
    }
    return (
        <div className="video">
        <video
        onClick={handleVideoPress}
        className="video_player"
        loop
        ref={videoRef}
        src={url}>
            </video>
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar likes={1000} shares={shares} messages={messages} />
           
        </div>
    );
}

export default Video
