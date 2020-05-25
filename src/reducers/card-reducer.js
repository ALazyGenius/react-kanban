import { cards } from '../normalised-state';
import VARIABLE from '../CONSTANTS';

const cardReducer = (cardState = cards, action) => {
    if (action.type === VARIABLE.CARD_CREATE) {
        const { card, cardId } = action.payload;
        return {
            entities: { ...cardState.entities, [cardId]: card },
            ids: [...cardState.ids, cardId]
        }
    }
    return cardState;
}

export default cardReducer;