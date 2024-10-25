'use client'
import React from 'react'
import Button from './Button'
import { useAuth } from '@/context/Authcontext'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Logout = () => {
    const { logout, currentUser } = useAuth()
    const pathname = usePathname()

    if (!currentUser) {
        if (pathname === '/') {
            return (
                <Link href={'/dashboard'}>
                    <Button text='Login' />
                </Link>
            )
        }
        return null
    }
    return (
        <Button text='Logout' clickHandler={logout} />
    )
}

export default Logout
