/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-21.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import Link from 'next/link';
import { MobileMenuProps } from '../types/MobileMenuProps';

const MobileMenu: React.FC<MobileMenuProps> = (props: MobileMenuProps) => (
    <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation="overlay" icon="labeled" inverted vertical visible={props.isVisible} width="thin">
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
        </Sidebar>

        <Sidebar.Pusher>
            <Segment basic>{props.children}</Segment>
        </Sidebar.Pusher>
    </Sidebar.Pushable>
);

export default MobileMenu;
