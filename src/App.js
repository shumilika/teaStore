import './App.scss';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import { APIProvider } from '@vis.gl/react-google-maps';
import { API_KEY_MAPS } from './services/constants';
import { useAuth } from './contexts/AuthContext';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fethCartList } from './store/personalProduct';


function App() {
  const {currentUser} = useAuth()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(currentUser){
      dispatch(fethCartList(currentUser.uid))
    }
  },[currentUser])
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
