/*
 *
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-22
 * MIT License - See LICENSE file
 *
 */

import React from 'react';
import { Button, Card, Input, Row, Spacer, Text } from '@nextui-org/react';
import { withRouter, NextRouter } from 'next/router'

interface WithRouterProps {
    router: NextRouter
}

type LoginState = {
    count: number;
};

class LoginForm extends React.Component<WithRouterProps, LoginState> {

    state: LoginState = {
        count: 0,
    };

    cancel() {
        this.props.router.push('/');
    }

    render() {
        return (
            <Card css={{mw: "600px"}}>
                <Card.Header>
                    <Text
                        h1
                        size={18}
                        weight="bold"
                    >Login</Text>
                </Card.Header>
                <Card.Body>
                    <Spacer y={2.0}/>
                    <Input clearable bordered labelPlaceholder="Username"/>
                    <Spacer y={2.0}/>
                    <Input.Password labelPlaceholder="Password"/>
                    <Spacer y={1.6}/>
                    <Text size={14}>&nbsp;Unsure? Try with <i>guest/guest</i></Text>
                </Card.Body>
                <Card.Footer>
                    <Row justify="flex-end" align="flex-end">
                        <Button color="secondary" auto onClick={() => this.cancel()}>
                            Cancel
                        </Button>
                        <Spacer x={0.3}/>
                        <Button color="primary" auto>
                            Login
                        </Button>
                    </Row>
                </Card.Footer>
            </Card>
        );
    }
}

export default withRouter(LoginForm);
