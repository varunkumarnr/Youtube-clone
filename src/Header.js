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
        <img className="header-logo" src="https://cdn.worldvectorlogo.com/logos/youtube-2.svg" alt=""></img>
        </div>
        <div className="header-middle">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header-inputbutton"/>
        </div>
        <div className = "header-right">
        <VideoCallIcon className="header-icon" />
        <AppsIcon className="header-icon"/>
        <NotificationIcon className="header-icon"/>
        <Avatar src="https://avatars1.githubusercontent.com/u/51260272?s=460&u=2ce790d3593eaab3bd62b52e0c38eb7c1f80d9d4&v=4" alt="" />
        </div> 
        </div>
    )
}

export default Header
