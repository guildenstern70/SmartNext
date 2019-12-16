/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import { MenuItem } from '../types/MenuItem';

export interface SystemState {
    activeMenuItem: MenuItem;
}

export const CHANGE_MENU_ITEM = 'CHANGE_MENU_ITEM';

export interface ChangeMenuItemAction {
    type: typeof CHANGE_MENU_ITEM;
    payload: MenuItem;
}
