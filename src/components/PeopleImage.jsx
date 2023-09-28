import {getPeopleOriginalImage, imgUnavailable} from "../utils/dbUtils.js";
import React from "react";

export const PeopleImage = (people) => {
    return <>
        <img className='poster'
             src={people.people.profile_path ? getPeopleOriginalImage(people.people.profile_path) : imgUnavailable}
             alt={name}/>
        <div className='vote'>{people.people.popularity}</div>
    </>;
}