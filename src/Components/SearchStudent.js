import { Delete, Edit } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


export function SearchStudent(props){
    let studAr = useSelector((store) => store.StudReducer);
    return (
        <>
            {
                studAr.map((stud) => {
                    if(parseInt(stud.studId) === parseInt(props.stdId)){
                        return(
                            <tr key={stud.studId} className='showTable'>
                                <td>{stud.studId}</td>
                                <td>{stud.studName}</td>
                                <td>{stud.studDept}</td>
                                <td>{stud.studYear}</td>
                                <td><NavLink to={`/students/delete/${stud.studId}`}><Delete color='success'/></NavLink></td>
                                <td><NavLink to={`/students/update/${stud.studId}`}><Edit color='secondary'/></NavLink></td>
                            </tr>
                        );
                    }
                })
            }
        </>
    );
}