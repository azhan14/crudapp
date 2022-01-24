
export const delStudents = (stdId)=>{
    return{
        type: 'DELETESTUDENTS',
        payload: stdId
    }
}

export const addStudent = (student)=>{
    return{
        type: 'ADDSTUDENT',
        payload: student
    }
}

export const updateStudent = (student)=>{
    return{
        type: 'UPDATESTUDENT',
        payload: student
    }
}
