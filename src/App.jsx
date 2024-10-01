import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Work from "./components/Work";
import PlayReel from "./components/PlayReel";
import Media from "./components/Media";
import Spread from "./components/Spread";
import Story from "./components/Story";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="relative w-full font-['Satoshi'] scrollbar-none">
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Media />
      <Spread />
      <Story />
    </div>
  )
}

export default App;