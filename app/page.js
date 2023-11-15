/**
 * SmartNext project template
 * (C) 2023, Alessio Saltarin
 * MIT License (see LICENSE)
 */


import styles from './page.module.css'
import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
        <h1 className="has-text-primary">SmartNext</h1>
        <i className="mt-6">A</i>
        <Image
            src="/next.svg"
            width={160}
            height={160}
            alt="Next.js Logo" />
        <i className="mb-6">template to start with</i>
        <div className="buttons">
            <Link href="/home" className="button is-primary">Enter</Link>
            <a href={'https://github.com/guildenstern70/SmartNext'}
               target={'_blank'}
               className="button is-link">Codebase</a>
        </div>
    </main>
  )
}
