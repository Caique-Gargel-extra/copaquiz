import './App.css';
import Logo from './layout/Logo';
import  {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Player from './pages/Player';
import Brazil from './pages/Brazil';
import Lineup from './pages/Lineup';
import Silhouette from './pages/Silhouette';
import MenuModos from './layout/MenuModos';
import { Analytics } from "@vercel/analytics/react"
import Footer from './layout/Footer';
function App() {
  return (
   <>
    <Router>
      
      <Logo/>
      
      <Routes>
        <Route path='/' element={<Brazil/>}/>
        <Route path='/classic' element={<Player/>}/>
        <Route path='/lineup' element={<Lineup/>}/>
        <Route path='/silhouette' element={<Silhouette/>}/>
      
      </Routes>
      <Footer/>
    </Router>
    <Analytics/>
   </>
  );
}

export default App;
