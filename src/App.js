import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
