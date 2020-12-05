
import reducer from '../reducers/reducer';
import {loadState, saveState} from "./localStorage";
import throttle from 'lodash.throttle';
import {createStore} from 'redux';

const persistedState = loadState();

export const store = createStore(
    reducer,
    persistedState
    );
store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));