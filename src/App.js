import './App.css';
import 'leaflet/dist/leaflet.css';
import Navbar from './components/Navbar';
import BasicMap from './components/BasicMap';

function App() {
  return (
    <main className="text-black-400 bg-white-100 body-font" >
    <Navbar />
    <BasicMap />
  </main>
  );

}

export default App;
