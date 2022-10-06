import Link from 'next/link'
import React from 'react'
import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'

export const Navbar = () => {

    const menuItems = [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Enviar Paliza',
            href: '/paliza'
        }
    ];

    return (
        <nav className={styles['menu-container']}>
            {
                menuItems.map( ({text, href}) => (
                    <ActiveLink key={href} text={text} href={href}></ActiveLink>        
                ))
            }
        </nav>
    )
}
