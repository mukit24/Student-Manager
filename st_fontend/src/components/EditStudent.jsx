import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const EditStudent = ({ currentStudent, onEdit }) => {
    const [inputs, setinputs] = useState(currentStudent);
    const navigate = useNavigate();
    const handleChange = e =>{
        const name = e.target.name;
        const value = e.target.value;
        setinputs(values => ({...values,[name]:value}));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        onEdit(inputs);
        setinputs({});
        navigate('/');
    }

    return (
        <>
            <h4 className='text-center text-primary'>Edit Student Information</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" required id="name" name='name' value={inputs.name} onChange={handleChange} />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" required id="email" name='email' value={inputs.email} onChange={handleChange} />
                </div>
                <div className="mb-2">
                    <label htmlFor="student_id" className="form-label">Student ID</label>
                    <input type="text" className="form-control" id="student_id" name='student_id' required value={inputs.student_id} onChange={handleChange} />
                </div>
                <div className="mb-2">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" required id="phone" name='phone' value={inputs.phone} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default EditStudent