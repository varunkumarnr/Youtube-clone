import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
function Header() {
    return (
        <div className = "header">
        <div className = "header-left">
        <MenuIcon />
        <img className="header-logo" src="https://cdn.worldvectorlogo.com/logos/youtube-2.svg"></img>
        </div>
        
        <input type="text" />
        <SearchIcon />
        <VideoCallIcon />
        <AppsIcon />
        <NotificationIcon />
        <Avatar src="https://avatars1.githubusercontent.com/u/51260272?s=460&u=2ce790d3593eaab3bd62b52e0c38eb7c1f80d9d4&v=4" />
        </div>
    )
}

export default Header
