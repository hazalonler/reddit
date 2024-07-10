import './App.css';
import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';
import Subreddits from './components/Subreddits/Subreddits';

const contents = [
   {
      id: '123',
      photoUrl: '',
      content: "My deck caught on fire while my daughter was grilling. We're moving out in about a month, what's the best way to fix it?",
      about: "Home",
      contentCreator: "jdsbdsfgsg",
      comments: [
        {comment: "ndsnjd", contentId: '123', commentId: '234'}, 
        {comment: "jsdjbsjb", contentId: '123', commentId: '235'}
      ],
      publishTime: "2024-04-25T21:30:05Z",
      voteNum: 15,
    },
    {
      id: '124',
      photoUrl: '',
      content: "Help me with Water valve- what is what?",
      about: "AskReddit",
      contentCreator: "bssebdsb",
      comments: [
        {comment: "fjdsnsndn", contentId: '124', commentId: '237'}, 
      ],
      publishTime: "2024-04-25T21:30:05Z",
      voteNum: 15,
    },
    {
      id: '125',
      photoUrl: '',
      content: "Best way to hide this Google Fiber cord?",
      about: "NoStupidQuestions",
      contentCreator: "sjsdnjnsnd",
      comments: [

      ],
      publishTime: "2024-07-01T21:30:05Z",
      voteNum: 15,
    },
    {
      id: '126',
      photoUrl: '',
      content: "Home Renovation ideas",
      about: "AskReddit",
      contentCreator: "hdsbsbsd",
      comments: [
        {comment: "dnsibbshbsbzib", contentId: '126', commentId: '238'}, 
        {comment: "djsbzbdsbdbsik", contentId: '126', commentId: '435'},
        {comment: "djsbfsbfudbs", contentId: '126', commentId: '434'}, 
        {comment: "fnsdbfifbdsfsd", contentId: '126', commentId: '535'}
      ],
      publishTime: "2024-06-25T21:30:05Z",
      voteNum: 15,
    },
  ]

const subreddits = [
    {
      title: "Home",
      contents: []
    },
    {
      title: "AskReddit",
      contents: [],  
    },
    {
      title: "NoStupidQuestions",
      contents: []
    }
]


function App() {
  return (
    <div className="App">
        <Header></Header>
        <div className='main'>
          <Contents contents={contents}></Contents>
          <Subreddits subreddits={subreddits}></Subreddits>
        </div>
    </div>
  );
}

export default App;
