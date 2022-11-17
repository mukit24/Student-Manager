import React from 'react'

const Student = ({ student }) => {
    return (
        <tr>
            <td>{student.name}</td>
            <td>{student.student_id}</td>
            <td>{student.phone}</td>
            <td>{student.email}</td>
            <td>{student.registrationDate}</td>
            <td>Edit Delete</td>
        </tr>
    )
}

export default Student