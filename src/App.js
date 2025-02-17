
import './App.css';
import Imageslider from './componets/Imageslider';
import slidesData from './componets/Data.json';
const slides = slidesData.slides;

function App() {
  return (
    <div >
      <Imageslider data ={slides} />
    </div>
  );
}

export default App;
