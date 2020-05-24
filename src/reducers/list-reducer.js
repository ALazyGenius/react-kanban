import { lists } from '../normalised-state';

const listReducer = (listState = lists, action) => {
    console.log(listState,action);
    return listState;
}

export default listReducer;