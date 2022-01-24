import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { delStudents, addStudent } from '../actions/StudAction';

function UpdateStudent(){
    let {id} = useParams();
    let [flag, setFlag] = useState(true);
    
    
   

    let studAr = useSelector((store) => store.StudReducer);
    let stud = studAr.find((ele) => ele.studId === parseInt(id));
    let dispatch = useDispatch();

    const [student, setStudent] = useState(stud);

    const setDetails = (e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
    }

    const test = (e)=>{
        e.preventDefault();
        dispatch(delStudents(parseInt(id)));
        dispatch(addStudent(student));
        setFlag(false);
    }

    return(
        <div className="myContent">
            {
                flag ? 
                <form onSubmit={test}>
                    <legend>EDIT STUDENT FORM</legend>
                    <table className='addTable'>
                        <tbody>
                            <tr>
                                <td><label className="myLabel">Enter Id: </label></td>
                                <td><input type="number" name='studId'  value={student.studId} onChange={setDetails} readOnly/></td>
                            </tr>
                            <tr>
                                <td><label className="myLabel">Enter Name: </label></td>
                                <td><input type="text" name='studName' value={student.studName} onChange={setDetails}/></td>
                            </tr>
                            <tr>
                                <td><label className="myLabel">Enter Department: </label></td>
                                <td><input type="text" name='studDept'  value={student.studDept} onChange={setDetails}/></td>
                            </tr>
                            <tr>
                                <td><label className="myLabel">Enter Year: </label></td>
                                <td><input type="text" name='studYear'  value={student.studYear} onChange={setDetails}/></td>
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

export default UpdateStudent;