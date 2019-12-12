/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */
import React from 'react';
import Layout from '../components/Layout';
import { Header, Image } from 'semantic-ui-react';

const Games = (): React.ReactNode => (
    <Layout isVisible={false}>
        <Header>Games</Header>
        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
    </Layout>
);

export default Games;
