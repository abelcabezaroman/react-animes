import React, { useEffect, useState } from 'react';
import axios from "axios";
import { AnimeGallery } from "../../shared/components/AnimeGallery/AnimeGallery";
import { AnimeSearch } from "../../shared/components/AnimeSearch/AnimeSearch";
import { Paginator } from 'primereact/paginator';

const itemsPerPage = 19;

export function AnimesPage() {

    const [animes, setAnimes] = useState([]);
    const [first, setFirst] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const [filterValues, setFilterValues] = useState({ name: '', category: '' });

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK_URL + 'anime?page[limit]=' + itemsPerPage + '&page[offset]=0').then(res => {
            const animesLocal = res.data.data;
            setAnimes(animesLocal);
            setTotalRecords(res.data.meta.count);
        })
    }, [])



    const filterAnimes = (filterValues) => {
        setFilterValues(filterValues);
        setFirst(0);
        axios.get(process.env.REACT_APP_BACK_URL + 'anime?page[limit]=' + itemsPerPage + '&page[offset]=0' + createFilterUrl(filterValues)).then(res => {
            setAnimes(res.data.data);
        })
    }

    const createFilterUrl = (filterValues) => {
        let filterUrl = filterValues.name.length ? '&filter[text]=' + filterValues.name : '';
        filterUrl += filterValues.category.length ? '&filter[categories]=' + filterValues.category : ''
        return filterUrl;
    }

    const changePage = (pageInfo) => {
        console.log('##ABEL## >> AnimesPage >>  changePage', pageInfo);
        setFirst(pageInfo.first);

        axios.get(process.env.REACT_APP_BACK_URL + 'anime?page[limit]=' + itemsPerPage + '&page[offset]=' + pageInfo.first + createFilterUrl(filterValues)).then(res => {
            setAnimes(res.data.data);
        })
    }




    return (
        <div>
            <div>
                <h1 className="b-text-primary d-flex align-items-center justify-content-center">Animes <span className="ml-3 icon-tv" /></h1>
            </div>
            
            <AnimeSearch fnSubmit={filterAnimes} />
            <AnimeGallery animes={animes} />

            <Paginator className="b-primereact-paginator" first={first} rows={itemsPerPage}
                totalRecords={totalRecords} onPageChange={changePage} />

            {/* <Paginator first={first} rows={itemsPerPage}
                totalRecords={totalRecords} onPageChange={changePage} /> */}

        </div>
    );
}

