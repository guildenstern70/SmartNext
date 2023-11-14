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
        <h1>SmartNext</h1>
        <i>A Next.js template to jump start</i>
        <Image
            src="/next.svg"
            width={200}
            height={200}
            alt="Next.js Logo" />
        <div className="buttons">
            <Link href="/home" className="button is-primary">Enter</Link>
            <a href={'https://github.com/guildenstern70/SmartNext'}
               target={'_blank'}
               className="button is-link">Boilerplate</a>
        </div>
    </main>
  )
}
