import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { CSSProperties } from 'react'
import { FC } from 'react'
import { LinkProps } from '../interfaces/Base'

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}



export const ActiveLink:FC<LinkProps> = ({ text, href }) => {
    const {asPath} = useRouter();
    return (
        <Link href={href}>
            <a style={ asPath === href ? style : undefined}>{text}</a>
        </Link>
    )
}
