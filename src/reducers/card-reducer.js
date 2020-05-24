import { cards } from '../normalised-state';
import VARIABLE from '../CONSTANTS';

const cardReducer = (cardState = cards, action) => {
    if (action.type === VARIABLE.CARD_CREATE) {
        const { card, cardId } = action.payload;
        return {
            entities: { ...cards.entities, [cardId]: card },
            ids: [...cards.ids, cardId]
        }
    }
    return cardState;
}

export default cardReducer;