import React, { useState, useEffect } from 'react';
import CreateIcon from "@material-ui/icons/Create"
import "./Feed.css"
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';

const Feed = () => {

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState();
    

    useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => 
        setPosts(
            snapshot.docs.map(doc =>(
            {
                id: doc.id,
                data: doc.data(),
            }
        ) ))
    );
        
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

    //     db.collection('posts').add{
    //         name: 'ashish',
    //         description: 'this is a db test',
    //         message: 'hello testing'
    //     }
    // }


    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value) } type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" 
                        color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" 
                        color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" 
                        color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" 
                        color="#7FC15E" />
                </div>
            </div>

            {/* postss */}
            
            <Post 
            name="Ashish bara"
            description="this is a test"
            message=" this is working"
              />
        </div>
    );
}}

export default Feed;
