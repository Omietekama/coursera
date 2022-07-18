import {useState} from "react"
import './App.css';
import "./component/scss/courses.scss"
import AllCourses from './component/pages/AllCourses';
import CareerStep from './component/pages/careerStep';
import CompleteCert from './component/pages/completeCert';
import CoursesInfo from './component/pages/coursesInfo';
//import ExploreCert from './component/pages/exploreCert';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Slide from './component/pages/slide';
import Login from './component/pages/login';
import Register from "./component/pages/register"
import Dashboard from './component/pages/dashboard';
import ProtectedRoute from "./component/pages/ProtectedRoute";
import SingleCourse from "./component/pages/singleCourse";
import "./component/scss/Home.scss";
import SharedLayout from "./component/pages/SharedLayout";
import Home from "./component/pages/Home";
import NewCareer from "./component/pages/exploreCert"

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      
     {/* <AllCourses />
     <CareerStep />
     <CoursesInfo />
     <CompleteCert /> */}
     {/* <ExploreCert /> */}
     {/* <Slide /> */}
      {/* <Login />  */}
      {/* <Register /> */}

    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/exploreCert" element={<NewCareer />}></Route>
      <Route path="/login" element={<Login setUser={setUser} />}></Route>
      <Route path="/register" element={<Register setUser={setUser} />}></Route>
    <Route path="/dashboard" element={<ProtectedRoute user={user}><Dashboard user={user} /> </ProtectedRoute>   
        }>

      </Route>
      <Route path="/dashboard/:ID" element={<SingleCourse />}></Route>
      </Route>
      
    </Routes>


     
    </div>
  );
}

export default App;
