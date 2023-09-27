import React from 'react'
import './Header.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <NavLink to={`/`} style={{textDecoration: 'none'}}>
            <div className="header">👨‍👩‍👧‍👦 Peoples And Movies️ 🎬</div>
        </NavLink>
    )
}