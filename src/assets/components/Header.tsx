import React from 'react'


// gsap
import { useEffect } from "react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

const Menu = () => {
    return (
        <div className='w-[24px] h-[24px] cursor-pointer lg:hidden block'>
            <svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0.844 6.050c-0.256-0.256-0.381-0.581-0.381-0.975s0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381s0.381 0.581 0.381 0.975-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381zM31.306 14.963c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381zM31.306 25.819c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.131 0.975 0.381z"></path> </g></svg>
        </div>
    )
}

const menuItems = [
    {
        id: 1,
        title: 'Home',
        link: '#'
    },
    {
        id: 2,
        title: 'About',
        link: '#'
    },
    {
        id: 3,
        title: 'Reviews',
        link: '#'
    },
    {
        id: 4,
        title: 'Contact',
        link: '#'
    },

]

const MenuItems = () => {
    return (
        <div className='lg:flex hidden items-center gap-10'>
            {
                menuItems.map(item => (
                    <p className='cursor-pointer text-lg font-interRegular menuItem'>{item.title}</p>
                ))
            }
        </div>
    )
}

const Logo = () => {
    return <p className='uppercase lg:text-3xl text-2xl font-interSemibold'>logo</p>
}


const Header = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
        gsap.set('.menuItem', {
            x: -200,
            opacity: 0
        })
        gsap.to('.menuItem', {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1
        })
    })

    return (
        <div className='lg:p-10 p-5 flex items-center justify-between'>
            <Logo />
            <MenuItems />
            <Menu />
        </div>
    )
}

export default Header