import "./App.css";
import Header from "./components/Header";
import VideoToGif from "./components/VideoToGif";
import VideoUploadRemove from "./components/VideoUploadRemove";

function App() {
  return (
    <div className="App">
      <Header />
      <VideoUploadRemove />
      {/* <VideoToGif /> */}
    </div>
  );
}

export default App;
