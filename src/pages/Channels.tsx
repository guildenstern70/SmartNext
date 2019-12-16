/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import { Header, Image } from 'semantic-ui-react';
import { MenuItem } from '../types/MenuItem';

class Channels extends React.Component {
    static getInitialProps({ store }): void {
        store.dispatch({ type: 'CHANGE_MENU_ITEM', payload: MenuItem.CHANNEL });
    }

    render(): React.ReactNode {
        return (
            <Layout isVisible={false}>
                <Header>Channels</Header>
                <Image src="/img/paragraph.png" />
            </Layout>
        );
    }
}

export default connect()(Channels);
