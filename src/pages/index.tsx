/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-21.
 * MIT License - See LICENSE file
 */
import React from 'react';
import Layout from '../components/Layout';
import { Header, Image } from 'semantic-ui-react';

const Index: React.FC = () => (
    <Layout isMobile={false} activePage="home">
        <Header>Home</Header>
        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
    </Layout>
);

export default Index;
