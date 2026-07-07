/**
 * SmartNext project template
 * (C) 2023-26, Alessio Saltarin
 * MIT License (see LICENSE)
 */

'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [theme, setTheme] = useState("dark");

    // Load theme setting on initial client-side mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        document.documentElement.setAttribute("data-theme", savedTheme);
        
        // Defer updating state to avoid synchronous cascading renders inside layout effect
        const timer = setTimeout(() => {
            setTheme(savedTheme);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function toggleDropdown(e) {
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    }

    function toggleTheme() {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
    }

    return (
        <header className="nav-header">
            <div className="container nav-container">
                <div className="nav-brand">
                    <Link className="nav-logo-link" href="/">
                        <Image
                            src="/next.svg"
                            width={80}
                            height={80}
                            alt="Next.js Logo" />
                    </Link>
                </div>

                <button
                    className="nav-burger"
                    aria-label="menu"
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}>
                    <span style={{ 
                        transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                        transformOrigin: 'center'
                    }}></span>
                    <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
                    <span style={{ 
                        transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                        transformOrigin: 'center'
                    }}></span>
                </button>

                <div className={`nav-menu ${isMenuOpen ? 'is-active' : ''}`}>
                    <ul className="nav-links">
                        <li>
                            <Link className="nav-link" href='/home'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href='/documentation'>
                                Documentation
                            </Link>
                        </li>
                        <li className={`dropdown ${isDropdownOpen ? 'is-active' : ''}`}
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}>
                            <button className="dropdown-trigger" onClick={toggleDropdown}>
                                More
                            </button>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" href="/about">
                                    About
                                </Link>
                                <Link className="dropdown-item" href="/contact">
                                    Contact
                                </Link>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="https://github.com/guildenstern70/SmartNext/issues" target="_blank" rel="noopener noreferrer">
                                    Report an issue
                                </a>
                            </div>
                        </li>
                    </ul>

                    <div className="nav-end">
                        <button 
                            className="theme-toggle-btn" 
                            onClick={toggleTheme} 
                            aria-label="Toggle light/dark theme"
                        >
                            {theme === 'light' ? (
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="theme-icon"
                                >
                                    <circle cx="12" cy="12" r="4"/>
                                    <path d="M12 2v2"/>
                                    <path d="M12 20v2"/>
                                    <path d="m4.93 4.93 1.41 1.41"/>
                                    <path d="m17.66 17.66 1.41 1.41"/>
                                    <path d="M2 12h2"/>
                                    <path d="M20 12h2"/>
                                    <path d="m6.34 17.66-1.41 1.41"/>
                                    <path d="m19.07 4.93-1.41 1.41"/>
                                </svg>
                            ) : (
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="theme-icon"
                                >
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                                </svg>
                            )}
                        </button>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input type="text" id="search" className="search-input" placeholder="Search..." />
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}
