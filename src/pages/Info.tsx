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
        store.dispatch({type: 'CHANGE_MENU_ITEM', payload: MenuItem.INFO});
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


