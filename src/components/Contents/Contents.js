import Content from '../Content/Content';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { 
    fetchComments, 
    fetchPosts, 
    selectFilteredPosts, 
    setSearchTerm
} from '../../store/redditSlice';

const Contents = () => {
    const reddit = useSelector((state) => state.reddit);
    const { searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
          dispatch(fetchComments(index, permalink));
        };
    
        return getComments;
    };

    if (posts.length === 0) {
        return (
          <div className="error">
            <h2>`No posts matching ${searchTerm}`</h2>
            <button type="button" onClick={() => dispatch(setSearchTerm(''))}>
              Go home
            </button>
          </div>
        );
      }


    return (
        <div style={{padding: '10px'}}>
            {posts.map((post, index) => (
                <Content 
                    key={post.id}
                    post={post}
                    onToggleComments={onToggleComments(index)}                
                />
            ))}
        </div>
    );
}

export default Contents;