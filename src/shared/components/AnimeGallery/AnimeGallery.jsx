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
            <div className="d-flex justify-content-center mt-5">
                <button className="b-btn b-btn--auto" onClick={() => setShowGallery(!showGallery)}>Change type view
                </button>
            </div>

            {!showGallery && <DataTable className="b-primereact-table mt-4" value={props.animes}>
                <Column header="Image" body={brandTemplate}/>
                <Column field="attributes.canonicalTitle" header="Title"/>
                <Column field="attributes.synopsis" header="Synopsis"/>
            </DataTable>}

            {showGallery && <div className="row">
                {props.animes.map((item, index) =>
                    <div className={index < 3 ? "col-4" : "col-3"} key={index}>
                        <a href={'https://kitsu.io/anime/' + item.id} target="_blank"
                           className="c-anime-gallery__item-container">
                            <figure
                                className={index < 3 ? "c-anime-gallery__item c-anime-gallery__item--max" : "c-anime-gallery__item"}>
                                <img src={item.attributes.posterImage && item.attributes.posterImage.original} alt=""
                                     className="c-anime-gallery__img"/>
                                <figcaption
                                    className="c-anime-gallery__caption">{item.attributes.canonicalTitle}</figcaption>
                            </figure>
                        </a>
                    </div>
                )}
            </div>}

            <Paginator className="b-primereact-paginator" first={props.pageInfo.first} rows={props.pageInfo.rows}
                       totalRecords={props.totalRecords} onPageChange={props.fnChangePage}/>


            <Paginator first={props.pageInfo.first} rows={props.pageInfo.rows}
                       totalRecords={props.totalRecords} onPageChange={props.fnChangePage}/>


        </div>


    );
}

