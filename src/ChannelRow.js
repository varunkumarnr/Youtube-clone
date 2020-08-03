import React from 'react';
import './ChannelRow.css';
import Avatar from '@material-ui/core/Avatar' ;
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
function ChannelRow({ChannelImage,channel,verified,subs,nuofvids,decription}) {
    return (
        <div className="ChannelRow">
            <Avatar className="channelRow-image" src={ChannelImage} alt="channel image"/>
            <div className="ChannelRow-Text">
            <h4>{channel}  {verified && <CheckCircleOutlineIcon />}</h4>
            <p>{subs} subscribers• {nuofvids} videos</p>
            <p>{decription}</p>
            </div>
        </div>
    )
}

export default ChannelRow
