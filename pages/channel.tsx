/*
 *
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-22
 * MIT License - See LICENSE file
 *
 */

import { NextPage } from 'next';
import Layout from '../components/Layout';
import React from 'react';
import { PageCard } from '../components/PageCard';
import { Row } from '@nextui-org/react';

const Channel: NextPage = (): JSX.Element =>

    <Layout showImage={true} activePage="channel">
        <Row justify="center"  align="center" css={{ mt: "2em" }}>
            <PageCard title={'CHANNEL'} />
        </Row>
    </Layout>

export default Channel;


