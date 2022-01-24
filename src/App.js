
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBarComponent/NavBar'
import ShowStudent from './Components/ShowStudents';
import DeleteStudent from './Components/DeleteStudent';
import AddStudent from './Components/AddStudent';
import { Home } from './HomeComponent/Home';
import UpdateStudent from './Components/UpdateStudent';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/home" element= {<Home/>}/>
          <Route path="/students" element= {<ShowStudent/>}/>
          <Route path="/students/delete/:id" element= {<DeleteStudent/>}/>
          <Route path="/students/update/:id" element= {<UpdateStudent/>}/>
          <Route path="/students/:action/:id" element= {<ShowStudent/>}/>
          <Route path="/students/add" element= {<AddStudent/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
