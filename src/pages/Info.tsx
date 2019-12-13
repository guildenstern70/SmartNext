/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';
import '../components/Layout.css';
import { Header, Image } from 'semantic-ui-react';
import Layout from '../components/Layout';
import {MenuItem} from "../types/MenuItem";

class Info extends React.Component {

    static getInitialProps({store, isServer, pathname, query}) {

        console.log('Current store for INFO:');
        console.log(JSON.stringify(store));

        store.dispatch({type: 'CHANGE_MENU_ITEM', payload: MenuItem.INFO});
        // component will be able to read from store's state when rendered

        console.log('After-dispatching store:');
        console.log(JSON.stringify(store));

        return {custom: 'custom'}; // you can pass some custom props to component from here
    }

    render(): React.ReactNode {
        return (
            <Layout isVisible={false}>
                <Header>Info</Header>
                <Image src="/img/paragraph.png"/>
            </Layout>
        );
    }
}

export default connect()(Info);


