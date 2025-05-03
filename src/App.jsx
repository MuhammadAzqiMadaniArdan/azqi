import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Certificate from './pages/Certificate';
import "./index.css";
import HomePage from './pages/Home';

function App() {
 return (
  <Router>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/certificate' element={<Certificate/>} />
    </Routes>
  </Router>
  
 )
}

export default App;
