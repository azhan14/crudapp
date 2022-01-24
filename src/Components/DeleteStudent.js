import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { delStudents } from '../actions/StudAction';

function DeleteStudent(){
    let {id} = useParams();
    let dispatch = useDispatch();
    useEffect(() =>{
        dispatch(delStudents(parseInt(id)));
    },[]);
    return(
        <div className="myContent">  
            <Navigate to="/students"/>
        </div>
    );
}

export default DeleteStudent;