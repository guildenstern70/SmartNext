/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-21.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';
import { LayoutProps } from '../types/LayoutProps';
import MobileMenu from './/MobileMenu';
import { VisibleState } from '../types/VisibleState';
import DesktopMenu from './DesktopMenu';

class Layout extends React.Component<LayoutProps, VisibleState> {
    constructor(props: LayoutProps) {
        super(props);
        this.state = { isVisible: false };
        this.changeMenuVisibility = this.changeMenuVisibility.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }

    changeMenuVisibility(): void {
        const currentState = this.state.isVisible;
        this.setState({
            isVisible: !currentState,
        });
    }

    hideMenu(): void {
        this.setState({
            isVisible: false,
        });
    }

    render(): React.ReactNode {
        return (
            <MobileMenu isVisible={this.state.isVisible}>
                <Container className="fullHeight">
                    <Header>
                        <DesktopMenu activeItem={this.props.activePage} />
                    </Header>
                    <Segment basic onClick={this.hideMenu}>
                        {this.props.children}
                    </Segment>
                </Container>
            </MobileMenu>
        );
    }
}

export default Layout;
