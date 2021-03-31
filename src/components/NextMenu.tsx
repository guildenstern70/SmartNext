/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import Link from 'next/link';
import { MenuProps } from '../types/MenuProps';

class NextMenu extends React.Component<MenuProps> {
    constructor(props: MenuProps) {
        super(props);
    }

    clickEventHandler = (e: React.SyntheticEvent, newItem: string): void => {
        this.props.onChangeMenuItem(newItem);
    };

    render(): React.ReactNode {
        console.log('Active item > ' + this.props.activeItem);
        return (
            <div>
                <Link href="/" passHref>
                    <Menu.Item
                        as="a"
                        name="home"
                        active={this.props.activeItem === 'home'}
                        onClick={(e): void => this.clickEventHandler(e, 'home')}
                    >
                        <Icon name="home" />
                        Home
                    </Menu.Item>
                </Link>

                <Link href="/Games" passHref>
                    <Menu.Item
                        as="a"
                        name="games"
                        active={this.props.activeItem === 'games'}
                        onClick={(e): void => this.clickEventHandler(e, 'games')}
                    >
                        <Icon name="gamepad" />
                        Games
                    </Menu.Item>
                </Link>

                <Link href="/Channels" passHref>
                    <Menu.Item
                        as="a"
                        name="channels"
                        active={this.props.activeItem === 'channels'}
                        onClick={(e): void => this.clickEventHandler(e, 'channels')}
                    >
                        <Icon name="camera" />
                        Channels
                    </Menu.Item>
                </Link>

                <Link href="/Info" passHref>
                    <Menu.Item
                        as="a"
                        name="info"
                        active={this.props.activeItem === 'info'}
                        onClick={(e): void => this.clickEventHandler(e, 'info')}
                    >
                        <Icon name="play" />
                        Info
                    </Menu.Item>
                </Link>
            </div>
        );
    }
}

export default NextMenu;
