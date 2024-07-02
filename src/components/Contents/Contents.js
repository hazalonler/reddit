import Content from '../Content/Content';

const Contents = (prop) => {
    return (
        <div style={{padding: '10px'}}>
            {prop.contents.map(content => {
                return (
                    <Content 
                    content={content}                
                    />
                )
            })}
        </div>
        
    );
}

export default Contents;