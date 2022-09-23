/*
 *
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-22
 * MIT License - See LICENSE file
 *
 */

import { Card, Col, Text } from '@nextui-org/react';
import React from 'react';

export type PageCardProps = {
    title: string;
}

export const PageCard = ({title}: PageCardProps) =>
    <Card css={{ mw: "400px" }} variant="bordered">
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={18} weight="bold" transform="uppercase" color="#000000">
                    {title}
                </Text>
            </Col>
        </Card.Header>
        <Card.Image
            src={'/img/smartnext.png'}
            objectFit="cover"
            width="100%"
            height={340}
            alt="Card image background"
        />
    </Card>
