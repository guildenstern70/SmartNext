/**
 * SmartNext project template
 * (C) 2023, Alessio Saltarin
 * MIT License (see LICENSE)
 */

'use client';

import Image from "next/image";
import Link from "next/link";

export default function Navigation() {

    function handleBurgerButton() {
        const burger = document.querySelector('.navbar-burger');
        const menu = document.querySelector('.navbar-menu');
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" href="/">
                    <Image
                        src="/next.svg"
                        width={80}
                        height={80}
                        alt="Next.js Logo" />
                </Link>
                <button
                    role="button"
                    className="navbar-burger"
                    aria-label="menu" aria-expanded="false"
                    onClick={handleBurgerButton}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" href='/home'>
                        Home
                    </Link>

                    <Link className="navbar-item" href='/documentation'>
                        Documentation
                    </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>
                            <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <form>
                            <input type={"text"} id="search" className="input" placeholder="Search..." />
                        </form>
                    </div>
                </div>
            </div>
        </nav>
)
}



