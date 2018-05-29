import { INCREMENT } from '../actionCreators/constants';

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}

export default (counterState = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case INCREMENT: {
            console.log('payload', payload.id);
            const nextState = {...counterState};
            if(payload.id == 1) {
                nextState.firstCounter = nextState.firstCounter + 1;
                return nextState;
            }
            if(payload.id == 2) {
                nextState.secondCounter += 1;
                return nextState;
            }
        }
    }

    return counterState;

}
