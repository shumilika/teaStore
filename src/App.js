import './App.scss';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import { APIProvider } from '@vis.gl/react-google-maps';
import { API_KEY_MAPS } from './services/constants';


function App() {
  return (
    <APIProvider apiKey={API_KEY_MAPS}>
    <div className='bgImage'>
    <Navigation/>
    <Content/>
    <Footer/>
    </div>
     </APIProvider>
  );
}

export default App;
