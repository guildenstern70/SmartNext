/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import { Menu, Segment, Sidebar } from 'semantic-ui-react';
import { MobileMenuProps } from '../types/MobileMenuProps';
import NextMenu from './NextMenu';
import { MobileMenuState } from '../types/MobileMenuState';

class MobileMenu extends React.Component<MobileMenuProps, MobileMenuState> {
    constructor(props: MobileMenuProps) {
        super(props);
        console.log('New Mobile Menu');
        this.state = { activeItem: 'home' };
    }

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
                    <NextMenu activeItem={this.state.activeItem} onChangeMenuItem={this.changeState} />
                </Sidebar>

                <Sidebar.Pusher style={mobileMenuStyle}>
                    <Segment basic>{this.props.children}</Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}

export default MobileMenu;
