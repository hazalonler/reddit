import Content from '../Content/Content';

const Contents = (props) => {
    return (
        <div style={{padding: '10px'}}>
            {props.contents.map(content => {
                return (
                    <Content 
                        key={content.id}
                        content={content}                
                    />
                )
            })}
        </div>
        
    );
}

export default Contents;