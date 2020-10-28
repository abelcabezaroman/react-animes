import React from 'react';
import { Link } from "react-router-dom";

export default function Menu () {
    const menu = [
        { title: 'Home', url: '' },
        { title: 'Animes', url: 'animes' }
    ]
    return (
    <nav>
        <ul>
            {menu.map(item => <Link to={item.url}>{item.title}</Link>)}
        </ul>
    </nav>);
}
