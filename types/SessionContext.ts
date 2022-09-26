/*
 *
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-22
 * MIT License - See LICENSE file
 *
 */


import React, { Context } from "react";
import { ISession } from "./ISession";
import { Session } from "./Session";


export const SessionContext: Context<ISession> = React.createContext(new Session());

