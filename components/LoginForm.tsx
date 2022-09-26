/*
 *
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-22
 * MIT License - See LICENSE file
 *
 */

import React from "react";
import { Button, Card, Container, Input, Row, Spacer, Text, FormElement } from "@nextui-org/react";
import { withRouter, NextRouter } from 'next/router'
import { SessionContext } from "../types/SessionContext";


interface WithRouterProps {
    router: NextRouter
}

type LoginState = {
    username: string,
    password: string,
    errors: boolean
};


class LoginForm extends React.Component<WithRouterProps, LoginState> {

    declare context: React.ContextType<typeof SessionContext>
    static sessionContext = SessionContext;

    constructor(props: WithRouterProps) {

        super(props);

        this.state =  {
            username: "",
            password: "",
            errors: false
        };

        this.contextLogin = this.contextLogin.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    contextLogin() {
        const { isLoggedIn, username, login } = this.context;
        console.log('Trying to login ' + this.state.username);
        console.log('Context = ' + username);
        if ((this.state.username == 'guest')&&(this.state.password == 'guest'))
        {
            if (!isLoggedIn) {
                login(this.state.username);
                this.props.router.push('/');
            }
        }
        else
        {
            this.setState( { errors: true } )
        }

    }

    handleChangeUsername(event: React.ChangeEvent<FormElement>) {
        this.setState({
            username: event.target.value,
            errors: false
        });
    }

    handleChangePassword(event: React.ChangeEvent<FormElement>) {
        this.setState({
            password: event.target.value,
            errors: false
        });
    }

    cancel() {
        this.props.router.push('/');
    }

    render() {

        let errorMessage = <span>&nbsp;</span>;

        if (this.state.errors) {
            errorMessage = <Text color="error">
                Unknown username or password.
            </Text>;
        }
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
                      <Input clearable bordered labelPlaceholder="Username"
                             value={this.state.username}
                             onChange={this.handleChangeUsername}
                      />
                      <Spacer y={2.0}/>
                      <Input.Password labelPlaceholder="Password"
                              value={this.state.password}
                              onChange={this.handleChangePassword} />
                      <Spacer y={1.6}/>
                      <Text size={14}>&nbsp;Unsure? Try with <i>guest/guest</i></Text>
                  </Card.Body>
                  <Card.Footer>
                      <Container>
                          <Row justify="flex-end" align="flex-end">
                              <Button color="secondary" auto onClick={() => this.cancel()}>
                                  Cancel
                              </Button>
                              <Spacer x={0.3}/>
                              <Button color="primary" auto onClick={ () => this.contextLogin()}>
                                  Login
                              </Button>
                          </Row>
                          <Row>
                              { errorMessage }
                          </Row>
                      </Container>
                  </Card.Footer>
              </Card>
        );
    }
}

export default withRouter(LoginForm);
