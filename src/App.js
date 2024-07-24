import './App.css';
import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';
import Subreddits from './components/Subreddits/Subreddits';


function App() {
  return (
    <div className="App">
        <Header></Header>
        <div className='main'>
          <Contents></Contents>
          <Subreddits></Subreddits>
        </div>
    </div>
  );
}

export default App;
