import { useState } from 'react';
import { Student } from '../StudentData/Student';
import { addStudent } from '../actions/StudAction';
import { useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';
import './AddStudent.css';
import { Button } from '@mui/material';
function AddStudent(){
    let [flag, setFlag] = useState(false);
    const [student, setStudent] = useState(new Student());
    const setDetails = (e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
    }

    let dispatch = useDispatch();

    const test = (e)=>{
        e.preventDefault();
        dispatch(addStudent(student));
        setFlag(true);
    }

    return(
        <div className='myContent'>
        {
            flag === false ?
            <form onSubmit={test}>
                <legend>ADD STUDENT FORM</legend>
                <table className='addTable'>
                    <tbody>
                        <tr>
                            <td><label className="myLabel">Enter Id: </label></td>
                            <td><input type="number" name='studId' value={student.studId} onChange={setDetails}/></td>
                        </tr>
                        <tr>
                            <td><label className="myLabel">Enter Name: </label></td>
                            <td><input type="text" name='studName' value={student.studName} onChange={setDetails}/></td>
                        </tr>
                        <tr>
                            <td><label className="myLabel">Enter Department: </label></td>
                            <td><input type="text" name='studDept' value={student.studDept} onChange={setDetails}/></td>
                        </tr>
                        <tr>
                            <td><label className="myLabel">Enter Year: </label></td>
                            <td><input type="text" name='studYear' value={student.studYear} onChange={setDetails}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{'textAlign' : 'center'}}><Button type='submit' variant='contained' color='success'>SUBMIT</Button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            :<Navigate to="/students"/>
        }
            
        </div>
    );
}

export default AddStudent;