import imgsrc from './imgsrc.png.jpg';
import './App.css'

function App() {
  return (
    <div className="App">
<div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Your name here</h1>
    <br />
    <img src={imgsrc} />
    <br />
    <img src="imgp.png.jpg" />
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
  || <iframe width={560} height={315} src="https://www.youtube.com/embed/NDdk2oBTzQw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

</div>
    </div>
  );
}

export default App;
