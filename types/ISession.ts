/*
 *
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-22
 * MIT License - See LICENSE file
 *
 */

export interface ISession {
  isLoggedIn: boolean,
  username: string,
  login(user: string): void,
  logout(): void
}

