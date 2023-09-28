import React from 'react';
import {getData, getPeopleAllDetails} from "../utils/dbUtils.js";
import {useQuery} from "react-query";
import {useParams} from "react-router-dom";
import './PeopleAllDetails.css'
import Grid from '@mui/material/Unstable_Grid2';
import {MoviesList} from "./MoviesList.jsx";
import {PeopleImage} from "./PeopleImage.jsx";
import {PeopleDetails} from "./PeopleDetails.jsx";

export const PeopleAllDetails = () => {
    const {id} = useParams();
    const {data: people, status} = useQuery(['people', getPeopleAllDetails(id)], getData);
    return (
        <>
        {status === 'success' ?
            <Grid container direction="row" justifyContent="flex-end" alignItems="stretch" spacing={2} className='peopleAllDetails'>
                <Grid xs={12} sm={12} md={6} lg={6} xl={6} style={{position: 'relative'}} className={'gridContainer'}>
                    <PeopleImage people={people}/>
                </Grid>
                <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2} xs={12} sm={12} md={6} lg={6} xl={6} className={'gridContainer'}>
                        <div className={'gridItem'}><PeopleDetails people={people}/></div>
                        <div className={'moviesList'}><MoviesList id={id}/></div>
                </Grid>
            </Grid>
            :
            null}
        </>
    );
};