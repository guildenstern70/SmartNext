/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-21.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import { MenuProps } from '../types/MenuProps';
import { Icon, Menu } from 'semantic-ui-react';
import Link from 'next/link';

const DesktopMenu: React.FC<MenuProps> = (props: MenuProps) => (
    <Menu>
        <Link href="/" passHref>
            <Menu.Item as="a" name="home" active={props.activeItem === 'home'}>
                <Icon name="home" />
                Home
            </Menu.Item>
        </Link>
        <Link href="/games" passHref>
            <Menu.Item as="a" name="games" active={props.activeItem === 'games'}>
                <Icon name="gamepad" />
                Games
            </Menu.Item>
        </Link>
        <Link href="/channels" passHref>
            <Menu.Item as="a" name="channels" active={props.activeItem === 'channels'}>
                <Icon name="camera" />
                Channels
            </Menu.Item>
        </Link>
        <Link href="/info" passHref>
            <Menu.Item as="a" name="info" active={props.activeItem === 'info'}>
                <Icon name="play" />
                Info
            </Menu.Item>
        </Link>
    </Menu>
);

export default DesktopMenu;
