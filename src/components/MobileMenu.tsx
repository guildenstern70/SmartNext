/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import {Icon, Menu, Segment, Sidebar} from "semantic-ui-react";
import {MobileMenuProps} from "../types/MobileMenuProps";
import Link from "next/link";

class MobileMenu extends React.Component<MobileMenuProps> {

    constructor(props: MobileMenuProps) {
        super(props);
    }

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
                visible={this.props.isVisible}
                width='thin'
            >
                <Link href="/Index" passHref>
                    <Menu.Item as='a'>
                        <Icon name='play' />
                            Index
                    </Menu.Item>
                </Link>

                <Link href="/Home" passHref>
                    <Menu.Item as='a'>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                </Link>

                <Link href="/Games" passHref>
                    <Menu.Item as='a'>
                        <Icon name='gamepad' />
                        Games
                    </Menu.Item>
                </Link>

                <Link href="/Channels" passHref>
                    <Menu.Item as='a'>
                        <Icon name='camera' />
                            Channels
                    </Menu.Item>
                </Link>

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

