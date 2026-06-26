import './App.css';
import Logo from './layout/Logo';
import  {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Player from './pages/Player';
import Brazil from './pages/Brazil';
import Lineup from './pages/Lineup';
import Silhouette from './pages/Silhouette';
import MenuModos from './layout/MenuModos';
import Footer from './layout/Footer';
function App() {
  return (
   <>
    <Router>
      
      <Logo/>
      
      <Routes>
        <Route path='/' element={<Player/>}/>
        <Route path='/brazil' element={<Brazil/>}/>
        <Route path='/lineup' element={<Lineup/>}/>
        <Route path='/silhouette' element={<Silhouette/>}/>
      
      </Routes>
      <Footer/>
    </Router>
   </>
  );
}

export default App;
