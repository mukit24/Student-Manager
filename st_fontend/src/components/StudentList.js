import { Link } from "react-router-dom";
import Student from "./Student";
const StudentList = ({ studentList }) => {
    return (
        <>
            <table className='table table-responsive table-light table-bordered'>
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
                            <Student key={student.pk} student={student} />
                        ))
                    }
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <Link to='/add'>
                    <button className='btn btn-success'>Add New Student</button>
                </Link>
            </div>
        </>

    )
}

export default StudentList