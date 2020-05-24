import { schema, normalize } from 'normalizr';
import defaultState from './default-state.json';

const user = new schema.Entity('users');
const card = new schema.Entity('cards', { assignedTo: user});
const list = new schema.Entity('lists', {
    cards: [card]
});

const normalizedLists = normalize(defaultState.lists, [list]);
const normalizedUsers = normalize(defaultState.users, [user]);

console.log("Normalised list", normalizedLists);
console.log("Normalised user", normalizedUsers);

export const lists = {
    entities: normalizedLists.entities.lists,
    ids: normalizedLists.result
};

export const users = {
    entities: normalizedUsers.entities.users,
    ids: normalizedUsers.result
};

export const cards = {
    entities: normalizedLists.entities.cards,
    ids: Object.keys(normalizedLists.entities.cards) 
};

console.log("Lists", lists);
console.log("Users", users);
console.log("Cards", cards);

export default {
    users,
    lists,
    cards
}