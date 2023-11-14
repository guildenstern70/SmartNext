/**
 * SmartNext project template
 * (C) 2023, Alessio Saltarin
 * MIT License (see LICENSE)
 */

import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
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
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
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
                                Jobs
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
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
)
}



