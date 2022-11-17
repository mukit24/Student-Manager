import { Link } from "react-router-dom";
import Student from "./Student";
const StudentList = ({ studentList, onDelete, onEditClick }) => {
    return (
        <>
        <div className="table-responsive">
            <table className='table table-light table-bordered'>
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Student ID</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                        <th scope="col">Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentList.map((student) => (
                            <Student key={student.pk} onEditClick = {onEditClick} student={student} onDelete={onDelete} />
                        ))
                    }
                </tbody>
            </table>
        </div>
            
            <div className="d-flex justify-content-end">
                <Link to='/add'>
                    <button className='btn btn-success'>Add New Student</button>
                </Link>
            </div>
        </>

    )
}

export default StudentList