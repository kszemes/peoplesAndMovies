import Typography from "@mui/material/Typography";
import React from "react";

export const PeopleDetails = (people) => {
    return <>
        <h2>{"Name: " + people.people.name}</h2>
        {people.people.also_known_as !== "" || people.people.also_known_as !== null &&
            <div>{"Also known as: " + people.people.also_known_as}</div>}
        {people.people.birthday !== null && <div>{"Birthday: " + people.people.birthday}</div>}
        {people.people.place_of_birth !== null && <div> {"Place of birth: " + people.people.place_of_birth}</div>}
        {people.people.deathday !== null && <div>{"Death of day: " + people.people.deathday}</div>}
        {people.people.homepage !== null &&
            <div>
                <span>Homepage: </span>
                <a href={people.people.homepage}>{people.people.homepage}</a>
            </div>}
        <div>{"Known For Department: " + people.people.known_for_department}</div>
        {people.people.biography !== "" && <Typography className='typography'>{"Biography: " + people.people.biography}</Typography>}
    </>;
}