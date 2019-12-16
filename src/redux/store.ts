/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import { Store, createStore } from 'redux';
import { systemReducer } from './reducers';
import { SystemState } from './actions';

const makeStore = (initialState: SystemState): Store<SystemState> => {
    return createStore(systemReducer, initialState);
};

export default makeStore;
