/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { MenuState } from '../types/MenuState';
import Link from 'next/link';
import { MobileMenuProps } from '../types/MobileMenuProps';

class MobileMenu extends React.Component<MobileMenuProps, MenuState> {
    constructor(props: MobileMenuProps) {
        super(props);
        console.log('New Mobile Menu');
        this.state = { activeItem: 'home' };
    }

    clickEventHandler = (e: React.SyntheticEvent, newItem: string): void => {
        this.changeState(newItem);
    };

    changeState = (newState: string): void => {
        this.setState({ activeItem: newState });
        console.log('New state is: ' + this.state.activeItem);
    };

    render(): React.ReactNode {
        const mobileMenuStyle = {
            height: '100%',
        };

        return (
            <Sidebar.Pushable style={mobileMenuStyle} as={Segment}>
                <Sidebar
                    as={Menu}
                    animation="overlay"
                    icon="labeled"
                    inverted
                    vertical
                    visible={this.props.isVisible}
                    width="thin"
                >
                    <Link href="/" passHref>
                        <Menu.Item
                            as="a"
                            name="home"
                            active={this.state.activeItem === 'home'}
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
                            active={this.state.activeItem === 'games'}
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
                            active={this.state.activeItem === 'channels'}
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
                            active={this.state.activeItem === 'info'}
                            onClick={(e): void => this.clickEventHandler(e, 'info')}
                        >
                            <Icon name="play" />
                            Info
                        </Menu.Item>
                    </Link>
                </Sidebar>

                <Sidebar.Pusher style={mobileMenuStyle}>
                    <Segment basic>{this.props.children}</Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}

export default MobileMenu;
