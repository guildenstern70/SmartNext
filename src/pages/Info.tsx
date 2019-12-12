/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../components/Layout.css';
import { Header, Image } from 'semantic-ui-react';
import Layout from '../components/Layout';

class Info extends React.Component {
    render(): React.ReactNode {
        return (
            <Layout isVisible={false}>
                <Header>Info</Header>
                <Image src="/img/paragraph.png" />
            </Layout>
        );
    }
}

export default Info;
