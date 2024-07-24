import './Content.css';
import { 
    TiArrowUpOutline,
    TiArrowUpThick,
    TiArrowDownOutline,
    TiArrowDownThick,
    TiMessage 
} from "react-icons/ti";
import { useState } from 'react';
import moment from 'moment';
import Comment from '../Comment/Comment';

const Content = (props) => {

    const [voteValue, setVoteValue] = useState(0);
    const { post, onToggleComments } = props;

    const onHandleVote = (newValue) => {
        if (newValue === voteValue) {
            setVoteValue(0);
        } else if (newValue === 1) {
            setVoteValue(1);
        } else {
            setVoteValue(-1);
        }
    };
    
    const renderUpVote = () => {
        if (voteValue === 1) {
            return <TiArrowUpThick className="icon-action" />;
        }
        return <TiArrowUpOutline className="icon-action" />;
    };

    const renderDownVote = () => {
        if (voteValue === -1) {
            return <TiArrowDownThick className="icon-action" />;
        }
        return <TiArrowDownOutline className="icon-action" />;
    };

    const getVoteType = () => {
        if (voteValue === 1) {
            return 'up-vote';
        }
        if (voteValue === -1) {
            return 'down-vote';
        }

        return '';
    };


    const renderComments = () => {
        return (
        <div>
            {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
            ))}
        </div>
        );
      };


    return (
        <article key={post.id}>
            <div className="card">
                <div className="post-votes-container">
                    <div 
                        className={`icon-action-button up-vote  ${voteValue === 1 && 'active'}`} 
                        onClick={() => onHandleVote(1)}
                    >
                        {renderUpVote()}
                    </div>
                    <div className={`post-votes-value ${getVoteType()}`}>{voteValue}</div>
                    <div 
                        className={`icon-action-button down-vote ${voteValue === -1 && 'active'}`}
                        onClick={() => onHandleVote(-1)}>
                            {renderDownVote()}
                    </div>
                </div>
                <div className="post">
                    <h2 className="post-title">{post.title}</h2>
                    <div className='post-image-container'>
                        <img src={post.url} alt='' className='post-image'/>
                    </div>


                    <div className="post-details">
                        <span className="author">
                            Posted by <span>{post.author}</span>
                        </span>
                        <span className='duration'>{moment.unix(post.created_utc).fromNow()}</span>
                        
                        <span className="post-comments-container">
                            <button
                                type="button"
                                className={`icon-action-button`}
                                onClick={() => onToggleComments(post.permalink)}
                                aria-label="Show comments"
                            >
                                <TiMessage className="icon-action" />
                            </button>
                            {post.num_comments}
                        </span>
                    </div>
                    {renderComments()}
                </div>
            </div>
        </article>
    );
}

export default Content;