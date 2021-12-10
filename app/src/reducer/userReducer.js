import { SET_USER, DELETE_USER,SET_PROGRESS,HIDE_PROGRESS} from '../action'

const iniTialState = {
    user: null,
    spinner : false,
};

const userReducer=(state=iniTialState,action)=>{
        switch(action.type){
            case SET_USER:
            return{
                ...state,
                user:action.payload,
            }

            break;

            case DELETE_USER: 
            return{
                ...state,
                user:null
            }
            break;

            default:
            return state
        }
    
    }

    export default userReducer;