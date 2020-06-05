import React from 'react';
import './AnimeGallery.scss'
import { Link } from "react-router-dom";


export function AnimeGallery (props) {

    // const applyBlack = false;
    //
    // const Figcaption = styled.figcaption`
    //     background-color: ${country === 'Spain' ? '#000000' : 'red'};
    //     color: red;
    //     font-size: 4rem;
    // }`;

    // const FigcaptionLocalStyles = styled.figcaption`
    //     background-color: ${({ theme }) => theme.backgroundOpacity};
    // }`;

    return (
        <div className="c-anime-gallery">
            <div className="row">
                {props.animes.map((item, index) =>
                    <div className={index < 3 ? "col-4" : "col-3"} key={index}>
                        <Link to={'animes/' + item.attributes.id} className="c-anime-gallery__item-container">
                            <figure className={index < 3 ? "c-anime-gallery__item c-anime-gallery__item--max" : "c-anime-gallery__item"}>
                                <img src={item.attributes.posterImage && item.attributes.posterImage.original} alt=""
                                     className="c-anime-gallery__img"/>
                                <figcaption
                                    className="c-anime-gallery__caption">{item.attributes.canonicalTitle}</figcaption>
                            </figure>
                        </Link>
                    </div>
                )}
            </div>
        </div>


    );
}

