import React from 'react';
import {
    getApiKey,
    getData,
    img_original,
    imgUnavailable,
    theMovieDbPeopleApiPrefix
} from "../utils/dbUtils.js";
import {useQuery} from "react-query";
import {useParams} from "react-router-dom";
import './PeopleAllDetails.css'
import Grid from '@mui/material/Unstable_Grid2';
import Typography from "@mui/material/Typography";

export const PeopleAllDetails = () => {
    const {id} = useParams();
    const urlSearch = `${theMovieDbPeopleApiPrefix}${id}?api_key=${getApiKey()}`
    const {data, status} = useQuery(['people', urlSearch], getData)
    return (
        <div>
            {status === 'success' ?
                <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={2}
                      className='peopleAllDetails'>
                    <Grid xs={12} sm={12} md={6} lg={6} xl={6} style={{position: 'relative'}} className={'gridContainer'}>
                        <img className='poster'
                             src={data.profile_path ? img_original + data.profile_path : imgUnavailable} alt={name}/>
                        <div className='vote'>{data.popularity}</div>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6} xl={6} className={'gridContainer'}>
                        <Grid container direction="column" justifyContent="center" alignItems="stretch">
                            <Grid className={'gridItem'}>
                                <div>{'Name: ' + data.name}</div>
                                {data.also_known_as !== '' || data.also_known_as !== null &&
                                <div>{'Also known as: ' + data.also_known_as}</div>}
                                {data.biography !== '' &&
                                    <Typography className='typography'>{'Biography: ' + data.biography}</Typography>}
                                <div>{'Birthday: ' + data.birthday}</div>
                                <div>{'Place of birth: ' + data.place_of_birth}</div>
                                {data.deathday !== null && <div> {'Death of day: ' + data.deathday}</div>}
                                {data.homepage !== null &&
                                    <div>
                                        <span>Homepage :</span>
                                        <a href={data.homepage}>{data.homepage}</a>
                                    </div>}
                                <div>{'Known For Department: ' + data.known_for_department}</div>
                            </Grid>
                            <Grid className={'gridItem'}>
                                <div>alksdfhasfdkljh</div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                :
                null}
        </div>
    )
        ;
};