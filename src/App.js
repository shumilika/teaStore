import './App.scss';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className='bgImage'>
    <Navigation/>
    <Content/>
    <Footer/>
    </div>
  );
}

export default App;
