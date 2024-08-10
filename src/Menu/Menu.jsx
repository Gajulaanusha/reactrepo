import React from 'react'
import styles from "./Menu.module.css"
import Link from "next/link"
export const Menu = () => {
  return (
    <div className={styles.Menu}>
        <ul>
            <li><Link href="home">home</Link></li>
            <li><Link href="about">about</Link></li>
            <li><Link href="contact">contact</Link></li>
        </ul>
    </div>
  )
}
