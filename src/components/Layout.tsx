/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'
import './Layout.css';
import { Header, Container, Icon, Menu, Segment, Input } from 'semantic-ui-react';
import MobileMenu from './/MobileMenu';
import { VisibleState } from '../types/VisibleState';
import { MobileMenuProps } from '../types/MobileMenuProps';
import {SystemState} from "../redux/actions";
import {MenuProps} from "../types/MenuProps";
import {MenuItem} from "../types/MenuItem";

class Layout extends React.Component<MobileMenuProps, VisibleState> {
    constructor(props: MobileMenuProps) {
        super(props);
        this.state = { isVisible: false };
    }

    changeMenuVisibility = (): void => {
        const currentState = this.state.isVisible;
        this.setState({
            isVisible: !currentState,
        });
    };

    hideMenu = (): void => {
        this.setState({
            isVisible: false,
        });
    };

    render(): React.ReactNode {
        return (
            <MobileMenu isVisible={this.state.isVisible}>
                <Container className="fullHeight">
                    <Header>
                        <Menu>
                            <Menu.Item name="mobileMenu" onClick={this.changeMenuVisibility}>
                                <Icon name="bars" />
                            </Menu.Item>
                            <Menu.Item header>{this.props.title}</Menu.Item>
                            <Menu.Menu position="right">
                                <Menu.Item>
                                    <Input icon="search" placeholder="Search..." />
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                    </Header>
                    <Segment basic onClick={this.hideMenu}>
                        {this.props.children}
                    </Segment>
                </Container>
            </MobileMenu>
        );
    }
}

// It is used for selecting the part of the data from the store that the connected component needs.
const mapStateToProps = (state: SystemState, ownProps: MobileMenuProps): MobileMenuProps => {

    let activeMenu = "?";

    switch (state.activeMenuItem) {
        case MenuItem.HOME:
            activeMenu = 'Home';
            break;
        case MenuItem.CHANNEL:
            activeMenu = 'Channels';
            break;
        case MenuItem.GAMES:
            activeMenu = 'Games';
            break;
        case MenuItem.INFO:
            activeMenu = 'Info';
            break;
    }
    ownProps.title = activeMenu;
    return ownProps;
};

export default connect(mapStateToProps)(Layout);
