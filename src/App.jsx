import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Work from "./components/Work";
import PlayReel from "./components/PlayReel";
import Media from "./components/Media";
import Spread from "./components/Spread";

const App = () => {
  return (
    <div className="relative w-full font-['Satoshi']">
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Media />
      <Spread />
    </div>
  )
}

export default App;