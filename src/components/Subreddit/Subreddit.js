import { useState } from 'react';
import './Subreddit.css';

const Subreddit = ({subreddit}) => {

    const [content, setContent] = useState();

    const showContent = () => {
        
    }
    
    return (
        <li className='subreddit'> 
            <div style={{padding: '10px'}} onClick={showContent}>
                <h2>{subreddit.title}</h2>
            </div>
        </li>
        
    );
}

export default Subreddit;