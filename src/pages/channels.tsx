/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-21.
 * MIT License - See LICENSE file
 */

import React from 'react';
import Layout from '../components/Layout';
import { Header, Image } from 'semantic-ui-react';

const Channels: React.FC = () => (
    <Layout isMobile={false} activePage="channels">
        <Header>Channels</Header>
        <Image src="img/paragraph.png" />
    </Layout>
);

export default Channels;
