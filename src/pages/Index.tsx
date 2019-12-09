/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Index.css';
import {
    Header,
    Container,
    Image, Icon, Menu, Segment
} from "semantic-ui-react";
import MobileMenu from "../components/MobileMenu";

class Home extends React.Component<void, IndexState>
{

    constructor() {
        super();
        this.state = { mobileMenuVisible: false };
        console.log('This mobile menu visible? ' + this.state.mobileMenuVisible);
        this.changeMenuVisibility = this.changeMenuVisibility.bind(this);
    }

    changeMenuVisibility(): void {
        const currentState = this.state.mobileMenuVisible;
        this.setState({
            mobileMenuVisible: !currentState
        })
    }

    render(): React.ReactNode { return (

        <MobileMenu visible={this.state.mobileMenuVisible}>

            <Container className='fullHeight'>
                <Header>
                    <Menu>
                        <Menu.Item
                            name='mobileMenu'
                            onClick={this.changeMenuVisibility}
                        >
                            <Icon name='align justify' />
                        </Menu.Item>
                    </Menu>
                </Header>
                <Segment basic onClick={this.changeMenuVisibility}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
            </Container>

        </MobileMenu>

    )};

}

export default Home;
