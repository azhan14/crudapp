
import { Delete, Edit } from '@mui/icons-material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { SearchStudent } from './SearchStudent';
import './ShowStudent.css';


function TableBody(){
    let studAr = useSelector((store) => store.StudReducer);
    return(
        <>
            {
                studAr.map((student) => {
                    return(
                        <tr key={student.studId} className='showTable'>
                            <td>{student.studId}</td>
                            <td>{student.studName}</td>
                            <td>{student.studDept}</td>
                            <td>{student.studYear}</td>
                            <td><NavLink to={`/students/delete/${student.studId}`}><Delete color='success'/></NavLink></td>
                            <td><NavLink to={`/students/update/${student.studId}`}><Edit color='secondary'/></NavLink></td>
                        </tr>
                    );
                })
            }
        </>
    );
}

function ShowStudent(){
    let {action,id} = useParams();
    return(
        <div className='myContent'>
            <SearchBar></SearchBar>
            <table border="1" style={{'border' : '1px solid lightgreen', 'borderCollapse' : 'collapse'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>DEPT</th>
                        <th>YEAR</th>
                        <th>DELETE</th>
                        <th>EDIT</th>
                    </tr>
                </thead>
                <tbody>
                {
                   (action === "search" && id != 0) ? <SearchStudent stdId = {id}/> : <TableBody/>
                }
                </tbody>
            </table>
        </div>
    );
}

function SearchBar(){
    let [stdId, setstdId] = useState(0);
    let changeId = (e) => {
        setstdId(e.target.value);
    }
    return(
        <div className='searchBar'>
            <input type="number" placeholder="search By Id" onChange={changeId}/>
            <NavLink to={`/students/search/${stdId}`} className="mySearchNavLink">SEARCH</NavLink>
        </div>
    );
}

export default ShowStudent;