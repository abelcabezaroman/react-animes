import React from 'react';
import { Link } from "react-router-dom";

export default function HomePage () {
    return (<>
        <h1 className="b-text-primary">WELCOME TO ANIME WIKI</h1>
        <div className="d-flex align-items-center">
            <Link to="animes" className="u-text-decoration-none">
                {/*<button className="b-btn b-btn--auto b-btn--big">Go to Animes!</button>*/}
                <button className="b-btn b-btn--auto b-btn--big">Go to Animes!<span className="b-btn__icon icon-airplane"/></button>
            </Link>
            <span className="b-icon b-icon--big b-icon--sec icon-fire ml-3"/>
        </div>

    </>);
}
