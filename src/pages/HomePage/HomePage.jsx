import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { useState } from 'react';


export default function HomePage () {
    const [animes] = useState([
        {title: 'Hellsing',
        gender: 'Gore',
        img: 'https://i.ytimg.com/vi/QFoECKJvfnE/maxresdefault.jpg'},
        {title: 'Code Geass',
        gender: 'Gore',
        img: 'https://thegeekclinic.files.wordpress.com/2014/10/code-geass2.jpg'},
        {title: 'Death Note',
        gender: 'Gore',
        img: 'http://img04.deviantart.net/33ca/i/2015/104/7/c/death_note_by_zzyzzyy-d8bsgvr.jpg'}
    ]);

    const itemTemplate = (anime) => <div className="b-primereact-carousel__item"><img src={anime.img} alt=""/><span className="b-primereact-carousel__title">{anime.title}</span></div>
    

    return (<>
        <h1 className="b-text-primary">WELCOME TO ANIME WIKI</h1>

        <Carousel className="b-primereact-carousel" value={animes} itemTemplate={itemTemplate}></Carousel>


        <Button label="Save" />
        <Button className="b-primereact-button" label="Save" />
        <Button className="b-primereact-button b-primereact-button--auto" label="Save" />
        <Button className="b-primereact-button b-primereact-button--big" label="Save" />

        {/*<div className="d-flex align-items-center">
            <Link to="animes" className="u-text-decoration-none">
                <button className="b-btn b-btn--auto b-btn--big">Go to Animes!</button>
                <button className="b-btn b-btn--auto b-btn--big">Go to Animes!<span className="b-btn__icon icon-airplane"/></button>
            </Link>
            <span className="b-icon b-icon--big b-icon--sec icon-fire ml-3"/>
    </div>*/}

    </>);
}
