import { ACTION_TYPES } from '../actions/actions'
const reducer1 = (state = {'init':false}, action) =>{
    switch (action.type) {
        case ACTION_TYPES.SAMPLE_ACTION:

            return {...state, 'init' : 0}
            
            break;
        case ACTION_TYPES.INIT:
            return {...state, 'init' : true}
    
        default:
            return state
            break;
    }
}
export default reducer1;