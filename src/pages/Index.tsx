/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import React from 'react';
import { connect } from 'react-redux'
import Layout from '../components/Layout';
import { Header, Image } from 'semantic-ui-react';
import {MenuItem} from "../types/MenuItem";

class Index extends React.Component {

    static getInitialProps({store, isServer, pathname, query}) {

        console.log('Current store for HOME:');
        console.log(JSON.stringify(store));

        store.dispatch({type: 'CHANGE_MENU_ITEM', payload: MenuItem.HOME});
        // component will be able to read from store's state when rendered

        console.log('After-dispatching store:');
        console.log(JSON.stringify(store));

        return {custom: 'custom'}; // you can pass some custom props to component from here
    }

    render(): React.ReactNode {
        return (
            <Layout isVisible={false}>
                <Header>Home</Header>
                <Image src="/img/paragraph.png" />
            </Layout>
        );
    }
}

export default connect()(Index);

