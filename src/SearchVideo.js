import React from 'react';
import './SearchVideo.css';
//import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
function SearchVideo({
    thumbnail,
    title,
    channel,
    subs,
    views,
    timestamp,
    decription
}) {
    return (
        <div className="SearchVideo">
        <img className="videosearch-thumbnail" src={thumbnail} alt="thumbnail"></img>

        <div className="SearchVideo-Text">
            <h4>{title}</h4>
            <p className="VideoSearch-info">{channel} •<span className="VideoSearch-Subs-Container"><span className = "VideoSearch-info-subs">{subs}</span> subscribers </span>{views} Views• {timestamp} </p>
            <p className="VideoSearch-desc">{decription}</p>
            <span className = "VideoSearch-new-badge">New</span> 
        </div>
        </div>
    )
}

export default SearchVideo
