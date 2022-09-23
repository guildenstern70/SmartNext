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

import { Card, Row, Text } from '@nextui-org/react';


const Index: NextPage = (): JSX.Element =>

    <Layout showImage={true} activePage="home">
        <Row justify="center"  align="center" css={{ mt: "6em" }}>
            <Card css={{ mw: "400px" }} variant="bordered">
                <Card.Header>
                    <Text h4 b>SmartNext Template</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body>
                    <Text>An easy template for &nbsp;
                        <a href={'https://vercel.com/solutions/nextjs'}
                           target={'_blank'} rel="noreferrer">Next.js</a> apps featuring:
                    </Text>
                    <ul>
                        <li>* <a href={'https://nextjs.org/docs/basic-features/typescript'} target={'_blank'} rel="noreferrer">Next.js in Typescript</a></li>
                        <li>* <a href={'https://nextui.org/'} target={'_blank'} rel="noreferrer">NextUI</a> </li>
                    </ul>
                </Card.Body>
            </Card>
        </Row>
    </Layout>

export default Index;

