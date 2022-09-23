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
import { Row } from '@nextui-org/react';
import { PageCard } from '../components/PageCard';


const Info: NextPage = (): JSX.Element =>

    <Layout showImage={true} activePage="info">
        <Row justify="center"  align="center" css={{ mt: "2em" }}>
            <PageCard title={'INFO'} />
        </Row>
    </Layout>

export default Info;
