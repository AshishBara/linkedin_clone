import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
const Post = ({ name, description, message, photoUrl }) => {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar />
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post_body">
                <p>{message}</p>

            </div>

            <div className="post_button">
                <InputOption 
                Icon={ThumbUpOutlinedIcon}
                title="Like"
                color="gray" 
                />
                 <InputOption 
                Icon={ChatOutlinedIcon}
                title="Comment"
                color="gray" 
                />
                 <InputOption 
                Icon={ShareOutlinedIcon}
                title="Share"
                color="gray" 
                />
                  <InputOption 
                Icon={SendOutlinedIcon}
                title="Send"
                color="gray" 
                />
            </div>
        </div>
    );
}

export default Post;
