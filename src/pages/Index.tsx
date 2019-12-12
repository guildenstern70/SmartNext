/*
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019.
 * MIT License - See LICENSE file
 */

import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../components/Layout.css';
import {
    Header,
    Image,
} from "semantic-ui-react";
import Layout from "../components/Layout";

class Home extends React.Component
{

    render(): React.ReactNode { return (

        <Layout isVisible={false}>
            <Header>Index</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Layout>


    )};

}

export default Home;
