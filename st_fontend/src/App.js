import Nav from "./components/Nav";
import StudentList from "./components/StudentList";
import { Route, Routes } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from 'axios';

function App() {
  const [stuentList, setstuentList] = useState([]);

  const API_URL = "http://localhost:8000/api/students/";

  useEffect(()=>{
    function getStudentList(){
      axios.get(API_URL).then((response)=>{
        setstuentList(response.data);
      })
    }
    getStudentList();
  },[])

  return (
    <div className="bg-light">
      <div className="container p-3">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Nav />
            <Routes>
              <Route path="/" element={<StudentList studentList={stuentList}/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
