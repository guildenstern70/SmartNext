/*
 *
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-22
 * MIT License - See LICENSE file
 *
 */


import { ISession } from "./ISession";

export class Session implements ISession {

  isLoggedIn: boolean;
  username: string;

  constructor() {
    this.isLoggedIn = false;
    this.username = "?";
  }

  login(user: string) {
    this.isLoggedIn = true;
    this.username = user;
  }

  logout() {
    this.isLoggedIn = false;
    this.username = "";
  }
}


