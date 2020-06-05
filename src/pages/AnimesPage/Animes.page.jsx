import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { environment } from "../../environments/environment";
import { AnimeGallery } from "../../shared/components/AnimeGallery/AnimeGallery";
import { AnimeSearch } from "../../shared/components/AnimeSearch/AnimeSearch";

const itemsPerPage = 19;
const defaultPageInfo = { first: 1, rows: itemsPerPage };

export function AnimesPage () {

    const [animes, setAnimes] = useState([]);
    const [pageInfo, setPageInfo] = useState(defaultPageInfo);
    const [filterValues, setFilterValues] = useState({ name: '', category: '' });
    const [totalRecors, setTotalRecords] = useState(0);


    useEffect(() => {
        axios.get(environment.url + 'anime?page[limit]=' + itemsPerPage + '&page[offset]=0').then(res => {
            const animesLocal = res.data.data;
            setAnimes(animesLocal);
            setTotalRecords(res.data.meta.count / itemsPerPage);
        })
    }, [])


    const filterAnimes = (filterValues) => {
        setFilterValues(filterValues);
        setPageInfo(defaultPageInfo);
        axios.get(environment.url + 'anime?page[limit]=' + itemsPerPage + '&page[offset]=0' + createFilterUrl(filterValues)).then(res => {
            const animesLocal = res.data.data;
            setAnimes(animesLocal);
        })
    }

    const changePage = (pageInfo) => {
        console.log('##ABEL## >> AnimesPage >>  changePage', pageInfo);
        setPageInfo(pageInfo);

        axios.get(environment.url + 'anime?page[limit]=' + itemsPerPage + '&page[offset]=' + pageInfo.first + createFilterUrl(filterValues)).then(res => {
            const animesLocal = res.data.data;
            setAnimes(animesLocal);
        })
    }

    const createFilterUrl = (filterValues) => {
        let filterUrl = filterValues.name.length ? '&filter[text]=' + filterValues.name : '';
        filterUrl += filterValues.category.length ? '&filter[categories]=' + filterValues.category : ''
        return filterUrl;
    }


    return (
        <div>
            <h1 className="b-text-primary d-flex justify-content-center">Animes</h1>
            <AnimeSearch fnSubmit={filterAnimes}/>
            <AnimeGallery totalRecors={totalRecors} pageInfo={pageInfo} animes={animes} fnChangePage={changePage}/>
        </div>
    );
}

