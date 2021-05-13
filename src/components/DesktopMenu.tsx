/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-21.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import { MenuProps } from '../types/MenuProps';
import { Icon, Menu } from 'semantic-ui-react';
import Link from 'next/link';

class DesktopMenu extends React.Component<MenuProps> {
    constructor(props: MenuProps) {
        super(props);
    }

    signup() {}

    render(): React.ReactNode {
        return (
            <Menu>
                <Link href="/" passHref>
                    <Menu.Item as="a" name="home" active={this.props.activeItem === 'home'}>
                        <Icon name="home" />
                        Home
                    </Menu.Item>
                </Link>
                <Link href="/games" passHref>
                    <Menu.Item as="a" name="games" active={this.props.activeItem === 'games'}>
                        <Icon name="gamepad" />
                        Games
                    </Menu.Item>
                </Link>
                <Link href="/channels" passHref>
                    <Menu.Item as="a" name="channels" active={this.props.activeItem === 'channels'}>
                        <Icon name="camera" />
                        Channels
                    </Menu.Item>
                </Link>
                <Link href="/info" passHref>
                    <Menu.Item as="a" name="info" active={this.props.activeItem === 'info'}>
                        <Icon name="play" />
                        Info
                    </Menu.Item>
                </Link>
                <Link href="/login" passHref>
                    <Menu.Menu position="right">
                        <Menu.Item
                            as="a"
                            name="login"
                            active={this.props.activeItem === 'login'}
                            onClick={this.signup}
                        />
                    </Menu.Menu>
                </Link>
            </Menu>
        );
    }
}

export default DesktopMenu;
