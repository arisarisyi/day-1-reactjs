import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import './style/LandingPage.css'
import Johnmayer from "./components/Johnmayer";
import Dreamtheater from './components/Dreamtheater';
function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBG'>
      <NavigationBar />
      <Intro />
      </div>
      {/* end of intro */}
      {/* Intro john */}
      <div className='johnmayer'>
      <Johnmayer />
      </div>
      {/* end john */}
      <div className='dreamtheater'>
        <Dreamtheater />
      </div>
    </div>
  );
}

export default App;
