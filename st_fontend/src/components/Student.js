import React from 'react'
import { Link } from 'react-router-dom'

const Student = ({ student,onDelete, onEditClick }) => {
    return (
        <tr>
            <td>{student.name}</td>
            <td>{student.student_id}</td>
            <td>{student.phone}</td>
            <td>{student.email}</td>
            <td>{student.registrationDate}</td>
            <td><button onClick={() => onDelete(student.pk)} className='btn btn-danger btn-sm m-1'>Delete</button>
            <Link to='/edit'>
            <button onClick={()=> onEditClick(student)} className='btn btn-primary btn-sm m-1'>Edit</button>
            </Link>
            </td>
        </tr>
    )
}

export default Student