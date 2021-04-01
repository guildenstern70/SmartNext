/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-21.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import { Header, Container, Segment, Grid, Menu, Icon, Image } from 'semantic-ui-react';
import { LayoutProps } from '../types/LayoutProps';
import { LayoutState } from '../types/LayoutState';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import styles from './Layout.module.css';

class Layout extends React.Component<LayoutProps, LayoutState> {
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
            <Container>
                <MobileMenu activeItem={this.props.activePage} isVisible={this.state.isVisible}>
                    <Container className="containerHeight">
                        <Header>
                            <Grid columns={1}>
                                <Grid.Column only="mobile">
                                    <Menu fixed="top" inverted>
                                        <Menu.Item name="mobileMenu" onClick={this.changeMenuVisibility}>
                                            <Icon name="bars" />
                                        </Menu.Item>
                                    </Menu>
                                    <div className={styles.mobileMenuSpan}></div>
                                </Grid.Column>
                                <Grid.Column only="computer">
                                    <DesktopMenu activeItem={this.props.activePage} />
                                </Grid.Column>
                            </Grid>
                        </Header>
                        <Image className="imageTopSpan" src="/img/smartnext.png" size="big" />
                        <Segment basic onClick={this.hideMenu}>
                            {this.props.children}
                        </Segment>
                    </Container>
                </MobileMenu>
            </Container>
        );
    }
}

export default Layout;
