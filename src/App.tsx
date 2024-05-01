
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {Home} from './Home/Home';
import {Login} from './Pages/Login';
import {Navbar} from './Components/Navbar';
import {CreatePost} from './Pages/CreatePost/CreatePost';

function App() {
 return( 
 <div className='App' >
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/CreatePost' element={<CreatePost/>} />
    </Routes>
  </Router>
 </div>
 );
  }
export default App;
