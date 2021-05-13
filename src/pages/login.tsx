/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-21.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { AuthenticationForm } from '../components/SignUpForm';

const Info: React.FC = () => (
    <Layout isMobile={false} activePage="login">
        <Header>Login</Header>
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column>
                    <AuthenticationForm />
                </Grid.Column>
                <Grid.Column></Grid.Column>
            </Grid.Row>
        </Grid>
    </Layout>
);

export default Info;
