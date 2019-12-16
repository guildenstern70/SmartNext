/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */
import React from 'react';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { Header, Image } from 'semantic-ui-react';
import { MenuItem } from '../types/MenuItem';

class Games extends React.Component {
    static getInitialProps({ store }): void {
        store.dispatch({ type: 'CHANGE_MENU_ITEM', payload: MenuItem.GAMES }); // component will be able to read from store's state when rendered
    }

    render(): React.ReactNode {
        return (
            <Layout isVisible={false}>
                <Header>Games</Header>
                <Image src="/img/paragraph.png" />
            </Layout>
        );
    }
}

export default connect()(Games);
