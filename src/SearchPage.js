import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage-filter">
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr />
        </div>
    )
}

export default SearchPage
