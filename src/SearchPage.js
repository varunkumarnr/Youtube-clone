import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from "./ChannelRow";
import SearchVideo from "./SearchVideo";
function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage-filter">
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow 
               ChannelImage = "//yt3.ggpht.com/a/AATXAJzG_RzzNheUdAPucOTvaB4VKLsw8NP8iMpM8rC4eQ=s176-c-k-c0x00ffffff-no-rj-mo"
               channel = "PewDiePie"
               verified 
               subs = "106M"
               nuofvids = {4204}
               decription = "I Make Videos"
            />
            <hr />
            <div className="latest">
            <h2>Latest from PewDiePie</h2>
            </div>
            <SearchVideo 
                thumbnail = "https://i.ytimg.com/vi/SlJZLLnhR7k/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCs87j1TBxJkuokgvkxGbTl7bnR4w"
                tilte = "This is Unacceptable"
                channel = "PewDiePie"
                verified
                views = "5.1M" 
                timestamp = "10 hours ago"
                decription = "Not epic floor gang announcement Floor Gang Merch! https://represent.com/store/pewdiepie (Thank you) Subscribe to become a ...."
            />
          
        </div>
    )
}

export default SearchPage