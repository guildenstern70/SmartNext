/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-21.
 * MIT License - See LICENSE file
 */

import React from 'react';

export interface MobileMenuProps {
    children?: React.ReactNode;
    isVisible: boolean;
    activeItem: string;
    title?: string;
}
