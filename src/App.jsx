import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Work from "./components/Work";
import PlayReel from "./components/PlayReel";
import Media from "./components/Media";

const App = () => {
  return (
    <div className="w-full font-['Satoshi']">
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Media />
    </div>
  )
}

export default App;