import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { environment } from "../../environments/environment";
import { AnimeGallery } from "../../shared/components/AnimeGallery/AnimeGallery";

export function AnimesPage () {

    const [animes, setAnimes] = useState([]);

    // const [amiibos, setAmiibos] = useContext(AmiibosContext);
    // const [filteredAmiibos, setFilteredAmiibos] = useState([]);


    useEffect(() => {
        axios.get(environment.url + 'anime?page[limit]=15').then(res => {
            const animesLocal = res.data.data;
            console.log('##ABEL## >> AnimesPage >>  res.data.data', res.data.data);
            setAnimes(animesLocal);
            // setFilteredAmiibos(amiibosLocal)
        })
    }, [])

    //
    // const filterAmiibos = (filterValues) => {
    //     const filteredLocalAmiibos = [];
    //     for (const amiibo of amiibos) {
    //         let amiiboIsOk = true;
    //         for (const key in filterValues) {
    //             if (filterValues.hasOwnProperty(key)) {
    //                 const localValue = amiibo[key];
    //                 const filterValue = filterValues[key];
    //                 if (!localValue || (localValue && filterValue && filterValue !== '' && !localValue.toLowerCase().includes(filterValue.toLowerCase()))) {
    //                     amiiboIsOk = false;
    //                     break;
    //                 }
    //             }
    //         }
    //         if (amiiboIsOk) {
    //             filteredLocalAmiibos.push(amiibo);
    //         }
    //     }
    //     setFilteredAmiibos(filteredLocalAmiibos);
    // }

    return (
        <div>
            <h1 className="b-text-primary d-flex justify-content-center">Animes</h1>
            {/*<AmiiboSearch fnSubmit={filterAmiibos}/>*/}
            <AnimeGallery animes={animes}/>
        </div>
    );
}

