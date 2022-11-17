import Nav from "./components/Nav";
import StudentList from "./components/StudentList";
import { Route, Routes } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from 'axios';
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

function App() {
  const [studentList, setstudentList] = useState([]);
  const [currentStudent, setcurrentStudent] = useState({})

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
      console.log(response);
      return setstudentList(response.data);
    })
  }

  const clickEdit = (student) =>{
    setcurrentStudent(student);
  }

  const editStudent = (student) =>{
    axios.put(API_URL+student.pk,student).then((response)=>{
      setstudentList(studentList.map((st) => st.pk === student.pk ? response.data:st))
    })
  }

  const deleteStudent = (pk) =>{
    axios.delete(API_URL+pk).then(() =>{
      setstudentList(studentList.filter((st) => st.pk !== pk))
    })
  }

  return (
    <div className="bg-light">
      <div className="container p-3">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Nav />
            <Routes>
              <Route path="/" element={<StudentList studentList={studentList} onDelete={deleteStudent} onEditClick = {clickEdit}/>}/>
              <Route path='/add' element={<AddStudent onAdd={addStudent} />}/>
              <Route path='/edit' element={<EditStudent currentStudent={currentStudent} onEdit={editStudent}/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
