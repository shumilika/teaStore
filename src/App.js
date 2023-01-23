import './App.css';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import { useLocation } from 'react-router-dom';


function App() {
  return (
    <div>
    <Navigation/>
    <Content/>
    <Footer/>
    </div>
  );
}

export default App;
