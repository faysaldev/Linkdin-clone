import {SET_PROGRESS,HIDE_PROGRESS} from '../action'

const iniTialState = {
    spinner : false,
};

const spinnerReducer=(state= iniTialState,action)=>{
        switch(action.type){
            case SET_PROGRESS:
                return{
                    ...state,
                    spinner:true,
                }

                break;

                case HIDE_PROGRESS:
                return{
                    ...state,
                    spinner:false,
                }
                break;

            default:
            return state
        }
    
    }

    export default spinnerReducer;