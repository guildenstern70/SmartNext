/*
 *
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-22
 * MIT License - See LICENSE file
 *
 */

import * as React from 'react';

import { Container, Image, Row } from '@nextui-org/react';
import { NavMenu } from './NavMenu';

type LayoutProps = {
    children?: React.ReactNode;
    activePage: string;
    showImage: boolean;
}

type LayoutState = {
    isVisible: boolean;
}


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
        let image;
        if (this.props.showImage) {
            image = <Row justify="center" align="center">
                <Image width={400} src={'/img/smartnext.png'} alt={'Next.js logo'}/>
            </Row>;
        } else {
            image = <span>&nbsp;</span>
        }
        return (
            <>
                <Container>
                    <NavMenu activeItem={this.props.activePage} />
                    { image }
                    { this.props.children }
                </Container>
            </>

        );
    }
}

export default Layout;



