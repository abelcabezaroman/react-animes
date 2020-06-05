import React, { useEffect, useState } from 'react';
import './AnimeSearch.scss'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { environment } from "../../../environments/environment";


export function AnimeSearch (props) {

    const [categories, setCategories] = useState([]);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => props.fnSubmit(data)

    useEffect(() => {
        axios.get(environment.url + 'categories?page[limit]=500').then(res => {
            setCategories(res.data.data);
        })
    }, []);

    // https://kitsu.io/api/edge/categories

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="b-form">
                <label htmlFor="name">
                    <span className="b-text-label">Name</span>
                    <input className="b-input" name="name" id="name"
                           ref={register}/>
                </label>

                <label htmlFor="category">
                    <span className="b-text-label">Category</span>
                    <select className="b-select" name="category" id="category"
                            ref={register}>
                        <option className="b-select__option" value=''>No category filter</option>
                        {categories.map(category =>
                            <option className="b-select__option" value={category.slug}>{category.attributes.title}</option>
                        )}
                    </select>
                </label>


                <input className="b-btn mt-3" type="submit"/>

            </form>
        </div>

    );
}

