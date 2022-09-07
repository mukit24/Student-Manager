import Student from "./Student";

const StudentList = ({ studentList }) => {
    return (
        <table className='table table-responsive table-light table-bordered'>
            <thead className="table-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Student ID</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    studentList.map((student) => (
                        <Student key={student.pk} student={student}/>
                    ))
                }
            </tbody>
        </table>
    )
}

export default StudentList