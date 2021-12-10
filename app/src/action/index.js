export const SET_USER = "SET_USER";
export const DELETE_USER = "DELETE_USER";


export const SET_PROGRESS = "SET_PROGRESS";
export const HIDE_PROGRESS = "HIDE_PROGRESS";


export const User=(payload)=>{
    return{
        type: SET_USER,
        payload: payload
    }
}

export const DeleteUser=()=>{
    return{
        type: DELETE_USER,
    }
}

export const setProgress=()=>{
    return{
        type:SET_PROGRESS
    }
}

export const hideProgress=()=>{
    return{
        type:HIDE_PROGRESS,
    }
}