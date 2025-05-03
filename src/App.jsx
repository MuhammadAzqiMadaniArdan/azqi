import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Certificate from './pages/Certificate';
import "./index.css";

function App() {
 return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/certificate' element={<Certificate/>} />
    </Routes>
  </Router>
  
 )
}

export default App;
