import * as React from 'react';
import { MenuState } from '../types/MenuState';
import { Icon, Menu } from 'semantic-ui-react';
import Link from 'next/link';

class DesktopMenu extends React.Component<{}, MenuState> {
    constructor(props: {}) {
        super(props);
        console.log('New Desktop Menu');
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
        return (
            <Menu>
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
            </Menu>
        );
    }
}

export default DesktopMenu;
