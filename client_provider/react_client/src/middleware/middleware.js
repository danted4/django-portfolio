import { ACTION_TYPES } from '../actions/actions';

const customMiddleware = store => next => action =>{
    switch (action.type) {
        case 'INIT':
                console.log('catch',action);
                // setTimeout(()=>{
                //     store.dispatch({type : 'INIT'});
                // },5000)
            break;
    
        default:
            break;
    }

    next(action);
}

export default customMiddleware;