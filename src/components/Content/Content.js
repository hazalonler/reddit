import './Content.css';
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { useState } from 'react';

const Content = ({content}) => {

    const format_time = new Date(content.publishTime);
    const now = new Date()
    console.log(now);
    const differenceInMillis = now - format_time;
    const differenceInHours = differenceInMillis / 1000 / 60 / 60;

    const [voteNum, setVoteNum] = useState(content.voteNum);

    const decrementVoteByOne = (event) => {
        setVoteNum(voteNum-1);
    };

    const incrementVoteByOne = (event) => {
        setVoteNum(voteNum+1);
    }

    return (
        <div className="card">
            <div className="vote-num">
                <span><div className='vote-up' onClick={incrementVoteByOne}><BiUpvote /></div></span>
                <div>{voteNum}</div>
                <span><div className='vote-down' onClick={decrementVoteByOne}><BiDownvote /></div></span>
            </div>
            <div className="content">
                <h2>{content.content}</h2>
                {content.photoUrl !== '' ? <img src='content.photoUrl'></img> : <div/>}
                <div className="author">
                    <h6>Posted by <span>{content.contentCreator}</span></h6>
                    <div className='duration'>{differenceInHours > 24 ? `${Math.round(differenceInHours/24)} days ago` : `${differenceInHours} hours ago`}</div>
                    <div className='comment-num'>
                        <FaRegCommentAlt />
                        <p>{content.comments.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;