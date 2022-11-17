import Nav from "./components/Nav";
import StudentList from "./components/StudentList";
import { Route, Routes } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from 'axios';
import AddStudent from "./components/AddStudent";

function App() {
  const [studentList, setstudentList] = useState([]);

  const API_URL = "http://localhost:8000/api/students/";

  useEffect(()=>{
    function getStudentList(){
      axios.get(API_URL).then((response)=>{
        setstudentList(response.data);
      })
    }
    getStudentList();
  },[])

  const addStudent = (student) =>{
    axios.post(API_URL,student).then((response)=>{
      setstudentList(response.data);
    })
  }

  return (
    <div className="bg-light">
      <div className="container p-3">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Nav />
            <Routes>
              <Route path="/" element={<StudentList studentList={studentList}/>}/>
              <Route path='/add' element={<AddStudent onAdd={addStudent} />}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
