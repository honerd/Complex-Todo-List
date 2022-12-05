import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import LoginPage from './components/LoginPage'
import Profile from './components/Profile'
import RegisterPage from './components/RegisterPage'
import SideBar from './components/SideBar'
import UpcomingTasks from './components/UpcomingTasks'
import CreateTask from './components/CreateTask';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
      
      <Route path='/login' element={<><Header/>
        <LoginPage/></>}/>
      
      <Route path='/home' element={<><Header/>
        <SideBar/>
        <Home/></>}/>

      
      <Route path='/upcoming' element={<><Header/>
        <SideBar/>
        <UpcomingTasks/></>}/>

      
      <Route path='/create'element={<><Header/>
        <SideBar/>
        <CreateTask/></>} />
        
      

      
      <Route path='/' element={<><Header/>
        <RegisterPage/></>}/>
      {console.log("first")}
      
      
      <Route path='/profile' element={<><Header/>
        <SideBar/>
        <Profile/></>}/>
      </Routes>
    </div>
  );
}

export default App;
