import React from 'react';
import Avatar from '@material-ui/core/Avatar' ;
import './video.css';
function VideoCard({image,title,channelname,timestamp,channelimage,views}) {
    return (
        <div className="videoCard">
           <img className="videocard-thumbnail" src={image} alt="thumbnail"></img>
           <div className="video-info">
                <Avatar className = "video-avatar" alt = {channelname} src={channelimage} />
                <div className="video-text">
                   <h4>{title}</h4>
                   <p>{channelname}</p>
                   <p>{views} • {timestamp} </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard