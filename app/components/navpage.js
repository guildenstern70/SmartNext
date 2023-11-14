/**
 * SmartNext project template
 * (C) 2023, Alessio Saltarin
 * MIT License (see LICENSE)
 */

import Navigation from "@/app/components/navigation";

export default function Navpage({ children }) {
    return (
        <main>
            <Navigation />
            <div className="container px-4 py-4">
                {children}
            </div>
        </main>
    )
}
