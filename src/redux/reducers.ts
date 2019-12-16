/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import { CHANGE_MENU_ITEM, ChangeMenuItemAction, SystemState } from './actions';
import { MenuItem } from '../types/MenuItem';

const initialState: SystemState = {
    activeMenuItem: MenuItem.HOME,
};

export function systemReducer(state = initialState, action: ChangeMenuItemAction): SystemState {
    console.log('Calling System Reducer');
    switch (action.type) {
        case CHANGE_MENU_ITEM: {
            return {
                activeMenuItem: action.payload,
            };
        }
        default:
            return state;
    }
}
