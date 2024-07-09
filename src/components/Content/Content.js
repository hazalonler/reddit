import './Content.css';

const Content = ({content}) => {

    const format_time = new Date(content.publishTime);
    const now = new Date()
    console.log(now);
    const differenceInMillis = now - format_time;
    const differenceInHours = differenceInMillis / 1000 / 60 / 60

    return (
        <div className="card">
            <div className="vote-num">
                <div>{content.voteNum}</div>
            </div>
            <div className="content">
                <h2>{content.content}</h2>
                {content.photoUrl !== '' ? <img src='content.photoUrl'></img> : <div/>}
                <div className="author">
                    <h6>{content.contentCreator}</h6>
                    <div>{differenceInHours > 24 ? `${Math.round(differenceInHours/24)} days ago` : `${differenceInHours} hours ago`}</div>
                    <div>{content.comments.length}</div>
                </div>
            </div>
        </div>
    );
}

export default Content;