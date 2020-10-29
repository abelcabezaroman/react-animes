import React, { useState } from 'react';
import './AnimeGallery.scss'
import { Paginator } from 'primereact/paginator';
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";

export function AnimeGallery (props) {

    const [showGallery, setShowGallery] = useState(true);
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

    const brandTemplate = (rowData) => {
        return <img src={rowData.attributes.posterImage.original} width="200px"/>;
    }


    return (
        <div className="c-anime-gallery">
            <div className="b-change-view d-flex justify-content-center mt-5">
                <span className={showGallery ? "b-change-view__icon b-icon icon-photo" : "b-change-view__icon" +
                    " b-change-view__icon--unselected b-icon icon-photo"} onClick={() => setShowGallery(true)}/>
                <span className={showGallery ? "b-change-view__icon b-change-view__icon--unselected b-icon" +
                    " icon-list" : "b-change-view__icon" +
                    " b-icon icon-list"} onClick={() => setShowGallery(false)}/>
            </div>

            {!showGallery && <DataTable className="b-primereact-table mt-4" value={props.animes}>
                <Column header="Image" body={brandTemplate}/>
                <Column field="attributes.canonicalTitle" header="Title"/>
                <Column field="attributes.synopsis" header="Synopsis"/>
            </DataTable>}

            {showGallery && <div className="row">
                {props.animes.map((anime, index) =>
                    <div className={index < 3 ? "col-12 col-sm-4 col-lg-4" : "col-12 col-sm-6 col-md-4 col-lg-3"} key={index}>
                        <a href={'https://kitsu.io/anime/' + anime.id} target="_blank"
                           className="c-anime-gallery__item-container">
                            <figure
                                className={index < 3 ? "c-anime-gallery__item c-anime-gallery__item--max" : "c-anime-gallery__item"}>
                                <img src={anime.attributes.posterImage && anime.attributes.posterImage.original} alt=""
                                     className="c-anime-gallery__img"/>
                                <figcaption
                                    className="c-anime-gallery__caption">{anime.attributes.canonicalTitle}</figcaption>
                            </figure>
                        </a>
                    </div>
                )}
            </div>}

           

        </div>


    );
}

