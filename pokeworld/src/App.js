import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Timeline from './pages/timeline';
import Landing from './pages/landing';
import Compare from './pages/compare';
import BasicNavbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import PokemonTimelineChart from './pages/timeline';

function App() {
  return (
    <div className="App">
      <BasicNavbar />
   <Routes>
    <Route path='/' element= {<Landing />} />
    <Route path='/time' element= {<Timeline/>} />
    <Route path='/compare' element= {<Compare />} />
   </Routes>
    </div>
  );
}

export default App;



