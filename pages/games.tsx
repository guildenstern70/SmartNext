/*
 *
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-22
 * MIT License - See LICENSE file
 *
 */

import React from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import { PageCard } from '../components/PageCard';
import { Row } from '@nextui-org/react';


const Games: NextPage = (): JSX.Element =>

    <Layout showImage={true} activePage="games">
        <Row justify="center"  align="center" css={{ mt: "2em" }}>
            <PageCard title={'GAMES'} />
        </Row>
    </Layout>

export default Games;

