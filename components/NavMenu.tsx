/*
 *
 * SmartNext - Progressive Web
 * Copyright (c) Alessio Saltarin 2019-22
 * MIT License - See LICENSE file
 *
 */


import { Button, Link, Navbar, Spacer, Text } from '@nextui-org/react';
import { SmartNextLogo } from './SmartNextLogo';
import styles from './NavMenu.module.css';

export type NavMenuProps = {
    activeItem: string;
}

export const NavMenu = ({activeItem}: NavMenuProps) =>
    <nav>
        <Spacer y={1}/>
        <Navbar isBordered variant="floating">
            <Navbar.Brand>
                <Navbar.Toggle className={styles.showOnMobileOnly} aria-label="toggle navigation" />
                <SmartNextLogo/>
                <Text hideIn="xs"
                      size={18}
                      css={{
                          textGradient: "45deg, $yellow600 -20%, $red600 100%",
                      }}
                      weight="bold">
                    SmartNext
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" variant="highlight-rounded">
                <Navbar.Link href="/" isActive={activeItem === 'home'}>Home</Navbar.Link>
                <Navbar.Link href="/games" isActive={activeItem === 'games'}>Games</Navbar.Link>
                <Navbar.Link href="/channel" isActive={activeItem === 'channel'}>Channel</Navbar.Link>
                <Navbar.Link href="/info" isActive={activeItem === 'info'}>Info</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Button auto flat as={Link} href="/login">
                        Login
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
            <Navbar.Collapse>
                <Navbar.CollapseItem key={'home'}>
                    <Link color="inherit" css={{minWidth: '100%',}} href="/">
                        Home
                    </Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem key={'games'}>
                    <Link color="inherit" css={{minWidth: '100%',}} href="/games">
                        Games
                    </Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem key={'channel'}>
                    <Link color="inherit" css={{minWidth: '100%',}} href="/channel">
                        Channel
                    </Link>
                </Navbar.CollapseItem>
                <Navbar.CollapseItem key={'info'}>
                    <Link color="inherit" css={{minWidth: '100%',}} href="/info">
                        Info
                    </Link>
                </Navbar.CollapseItem>
            </Navbar.Collapse>
        </Navbar>
        <Spacer y={2}/>
    </nav>;




