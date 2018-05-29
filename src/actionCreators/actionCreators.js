import { INCREMENT } from './constants';

export function increment(id) {
    return {
        type: INCREMENT,
        payload: { id }
    }
}