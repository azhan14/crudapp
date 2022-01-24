import {StudentIntf} from '../StudentData/StudentIntf';
let studImpl = new StudentIntf();
export const StudReducer = (state = [...studImpl.studArray], action)=>{
    switch(action.type){
        case 'DELETESTUDENTS': {
            state = studImpl.deleteStudent(action.payload);
            return state;
        }
        case 'ADDSTUDENT': {
            state = studImpl.addStudent(action.payload);
            return state;
        }
        case 'UPDATESTUDENT':{
            state = studImpl.updateStudent(action.payload);
            return state;
        }
        default: return state;
    }
}