/**
 * SmartNext project template
 * (C) 2023-26, Alessio Saltarin
 * MIT License (see LICENSE)
 */

import Navigation from "@/app/components/navigation";

export default function Navpage({ children }) {
    return (
        <>
            <Navigation />
            <main className="navpage-main">
                <div className="container px-4 py-4">
                    {children}
                </div>
            </main>
        </>
    )
}
