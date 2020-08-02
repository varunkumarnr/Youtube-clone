import React, {useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
function Header() {
    const [inputSearch , setInputSearch] = useState('');
    return (
        <div className = "header">
        <div className = "header-left">
        <MenuIcon />
        <Link to = {`/`}><img className="header-logo" src="https://cdn.worldvectorlogo.com/logos/youtube-2.svg" alt=""></img></Link>        
        </div>
        <div className="header-middle">
        <input type="text"onChange={e=> setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" />
        <Link to = {`/search/${inputSearch}`}><SearchIcon className="header-inputbutton"/></Link>      
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
