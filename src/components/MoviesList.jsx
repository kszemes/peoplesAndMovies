import React, {useState} from 'react';
import {useQuery} from "react-query";
import {getData, getMoviesByPeople} from "../utils/dbUtils.js";
import {ContentPagination} from "./ContentPagination.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import {MovieAllDetails} from "./MovieAllDetails.jsx";

export const MoviesList = ({id}) => {
    const [page, setPage] = useState(1)
    const {data: movies, status} = useQuery(['movies', getMoviesByPeople(id, page)], getData);
    return (
        <Grid container direction="column" justifyContent="space-between" alignItems="stretch">
            {status === 'success' ?
                <Grid container direction="column" justifyContent="center" alignItems="center"
                      className='moviesList'><b>List of movies:</b>
                    <br/>
                    {movies.results.map((movie) =>
                        <MovieAllDetails id={movie.id}>
                            <span>{movie.release_date} - </span>
                            <span>{movie.title}</span>
                        </MovieAllDetails>
                    )}
                </Grid>
                :
                <div>
                    -
                </div>
            }
            {(movies?.total_pages > 1) &&
                <Grid>
                    <ContentPagination page={page} setPage={setPage}
                                       numOfPage={movies.total_pages > 500 ? 500 : movies.total_pages}/>
                </Grid>
            }
        </Grid>
    );
};