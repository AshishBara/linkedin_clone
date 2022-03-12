import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@material-ui/core';

const Sidebar = () => {

const recentItem = (topic) => (
    <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
    </div>
)

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://source.unsplash.com/random" alt="hii" />
                <Avatar className="sidebar_avatar" />
                <h2>Ashish Bara</h2>
                <h4>ashish14309@gmail.com</h4>
             </div>   
                <div className="sidebar_stats">
                    <div className="sidebar_stat">
                        <p>Who viewed you</p>
                        <p className="sidebar_statNumber">2,345</p>
                    </div>
                    <div className="sidebar_stat">
                        <p>views on post</p>
                        <p className="sidebar_statNumber">2,895</p>
                    </div>
                </div>

            
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programing')}
                {recentItem('softwareEngineering')}
                {recentItem('design')}
                {recentItem('developer')}
            
            </div>
        </div>
    );
}

export default Sidebar;
