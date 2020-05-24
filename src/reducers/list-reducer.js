import { lists } from '../normalised-state';
import VARIABLE from '../CONSTANTS';

const listReducer = (listState = lists, action) => {
    if (action.type === VARIABLE.CARD_CREATE) {
        const { cardId, listId  } = action.payload;
        const entities = { ...lists.entities };
        entities[listId] = {
            ...entities[listId],
            cards: entities[listId].cards.concat(cardId)
        }
        return {
            ...lists,
            entities
        }
    }
    return listState;
}

export default listReducer;