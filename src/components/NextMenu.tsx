/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import { connect } from 'react-redux'
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'semantic-ui-react';
import { MenuProps } from '../types/MenuProps';
import { Validator } from 'react';
import {SystemState} from "../redux/actions";
import {MenuItem} from "../types/MenuItem";

class NextMenu extends React.Component<MenuProps> {

    static propTypes: { activeItem: Validator<NonNullable<string>> };

    constructor(props) {
        super(props);
        console.log('Next Menu Props:');
        console.log(JSON.stringify(props));
    }

    render(): React.ReactNode {
        console.log('Active item > ' + this.props.activeItem);
        return (
            <div>
                <Link href="/" passHref>
                    <Menu.Item
                        as="a"
                        name="home"
                        active={this.props.activeItem === 'home'}
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
                    >
                        <Icon name="play" />
                        Info
                    </Menu.Item>
                </Link>
            </div>
        );
    }
}

NextMenu.propTypes = {
    activeItem: PropTypes.string.isRequired,
};

// It is used for selecting the part of the data from the store that the connected component needs.
const mapStateToProps = (state: SystemState /*, ownProps*/): MenuProps => {

    let activeMenu = "?";

    switch (state.activeMenuItem) {
        case MenuItem.HOME:
            activeMenu = 'home';
            break;
        case MenuItem.CHANNEL:
            activeMenu = 'channels';
            break;
        case MenuItem.GAMES:
            activeMenu = 'games';
            break;
        case MenuItem.INFO:
            activeMenu = 'info';
            break;
    }
    return { activeItem: activeMenu }
};

export default connect(
    mapStateToProps
)(NextMenu);


