import { createStore } from 'redux';
import counter from '../reducers/counter.reducer';

const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;