import { lists } from '../normalised-state';
import VARIABLE from '../CONSTANTS';

const listReducer = (listState = lists, action) => {
    if (action.type === VARIABLE.CARD_CREATE) {
        const { cardId, listId  } = action.payload;
        const entities = { ...listState.entities };
        entities[listId] = {
            ...entities[listId],
            cards: entities[listId].cards.concat(cardId)
        }
        return {
            ...listState,
            entities
        };
    }    
    if (action.type === VARIABLE.LIST_CREATE) {
        const { list, listId  } = action.payload;
        const entities = { ...listState.entities };
        const ids = [ ...listState.ids, listId ];
        entities[listId] = {
            cards: [],
            id: listId,
            title: list.title
        }
        return {
            entities,
            ids
        };
    }
    return listState;
}

export default listReducer;