import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Navigate to = "/home"/>}/>
        <Route exact path='/home' element={<Homepage/>}/>
        <Route exact path='/register' element={<SignUp/>}/>
        <Route exact path='/login' element={<Login/>}/>

      </Routes>
    
    </Router>
  );
}

export default App;
