/*
 *
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-22
 * MIT License - See LICENSE file
 *
 */

import { NextPage } from 'next';
import Layout from '../components/Layout';
import { Row } from '@nextui-org/react';
import React from 'react';
import LoginForm from '../components/LoginForm';


const Login: NextPage = (): JSX.Element =>

        <Layout showImage={false} activePage="info">
            <Row justify="center" align="center" css={{mt: "2em"}}>
                <LoginForm />
            </Row>
        </Layout>


export default Login;

