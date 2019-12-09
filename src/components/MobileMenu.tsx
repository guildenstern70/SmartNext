/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import {Icon, Menu, Segment, Sidebar} from "semantic-ui-react";


class MobileMenu extends React.Component<MobileMenuProps> {

    render(): React.ReactNode {

        const mobileMenuStyle = {
            height: "100%",
        };

        return (

        <Sidebar.Pushable style={mobileMenuStyle} as={Segment}>
            <Sidebar style={mobileMenuStyle}
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible={this.props.visible}
                width='thin'
            >
                <Menu.Item as='a'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='gamepad' />
                    Games
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='camera' />
                    Channels
                </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher style={mobileMenuStyle}>
                <Segment basic>
                    {this.props.children}
                </Segment>
            </Sidebar.Pusher>

        </Sidebar.Pushable>

    )};

}

export default MobileMenu;

