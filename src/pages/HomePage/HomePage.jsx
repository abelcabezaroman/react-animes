import React from 'react';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

export default function HomePage () {
    return (<><h1 className="b-text-primary">WELCOME TO ANIME WIKI</h1><Link to="animes"><button className="b-btn b-btn--auto b-btn--big">Go to Animes!</button></Link></>);
}
