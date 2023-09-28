import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import {getData, getMoviesByPeople} from "../utils/dbUtils.js";
import {ContentPagination} from "./ContentPagination.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import {NavLink} from "react-router-dom";

export const MoviesList = ({id}) => {
    const [page, setPage] = useState(1)
    const {data: movies, status} = useQuery(['movies', getMoviesByPeople(id, page)], getData);
    return (
        <Grid container direction="column" justifyContent="space-between" alignItems="stretch">
            {status === 'success' ?
                <Grid container direction="column" justifyContent="center" alignItems="flex-start" className='moviesList'>
                    {movies.results.map((movie)=>
                        <div>
                            <span>{movie.release_date} - </span>
                            <NavLink to={{pathname: `/movie:${movie.id}`, state: {modal: true}}}>{movie.title}</NavLink>
                        </div>
                    )}
                </Grid>
                :
                <div>
                    -
                </div>
            }
            {(movies?.total_pages > 1) &&
                <Grid>
                    <ContentPagination page={page} setPage={setPage} numOfPage={movies.total_pages > 500 ? 500 : movies.total_pages}/>
                </Grid>
            }
        </Grid>
    );
};