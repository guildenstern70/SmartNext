/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Layout.css';
import {
    Header,
    Container,
    Image, Icon, Menu, Segment, Input
} from "semantic-ui-react";
import MobileMenu from "../components/MobileMenu";
import {VisibleState} from "../types/VisibleState";
import {MobileMenuProps} from "../types/MobileMenuProps";

class Layout extends React.Component<MobileMenuProps, VisibleState>
{

    constructor(props: MobileMenuProps) {
        super(props);
        this.state = { isVisible: false };
        this.changeMenuVisibility = this.changeMenuVisibility.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }

    changeMenuVisibility(): void {
        const currentState = this.state.isVisible;
        this.setState({
            isVisible: !currentState
        })
    }

    hideMenu(): void {
        this.setState({
            isVisible: false
        })
    }

    render(): React.ReactNode { return (

        <MobileMenu isVisible={this.state.isVisible}>

            <Container className='fullHeight'>
                <Header>
                    <Menu>
                        <Menu.Item
                            name='mobileMenu'
                            onClick={this.changeMenuVisibility}
                        >
                            <Icon name='bars' />
                        </Menu.Item>
                        <Menu.Item>
                            Home
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Input icon='search' placeholder='Search...' />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Header>
                <Segment basic onClick={this.hideMenu}>
                    {this.props.children}
                </Segment>
            </Container>

        </MobileMenu>

    )};

}

export default Layout;
