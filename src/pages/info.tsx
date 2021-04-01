/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-21.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import { Header, Image } from 'semantic-ui-react';
import Layout from '../components/Layout';

const Info: React.FC = () => (
    <Layout isMobile={false} activePage="info">
        <Header>Info</Header>
        <Image src="img/paragraph.png" />
    </Layout>
);

export default Info;
