import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'

type ActiveClassNameType = {
    isActive: boolean
}

export const setClassName = ({isActive}: ActiveClassNameType) => isActive ? s.active : s.link

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={setClassName}>Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={setClassName}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={setClassName}>Junior-plus</NavLink>
            <div className={s.menu}></div>
        </div>
    )
}

export default Header
