import { BrowserRouter as Router, Route, Navigate, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Notification from './pages/Notification';
import Setting from './pages/Setting';


function App() {
  
  return (
    <Router>
            <Sidebar/>
            <RoutesWithTransitions />
    </Router>
    
  );
}

function RoutesWithTransitions(){

  const location = useLocation();
  return(
    <SwitchTransition mode="out-in">
      <CSSTransition
          key={location.key}
          timeout={300}
          classNames="fade" 
      >
          <Routes location={location}>
            <Route exact path='/' element={<Navigate to = "/home"/>}/>
            <Route exact path='/home' element={<Homepage/>}/>
            <Route exact path='/register' element={<SignUp/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/notification' element={<Notification/>}/>
            <Route exact path='/settings' element={<Setting/>}/>
          </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
