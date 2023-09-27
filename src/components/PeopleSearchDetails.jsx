import React from 'react'
import './PeopleSearchDetails.css'
import {getPersonImage, img_300, imgUnavailable} from "../utils/dbUtils.js";

export const PeopleSearchDetails = ({adult, gender, id, known_for_department, name, original_name, popularity, profile_path, known_for}) => {
    return (
        <div className={'singleContent'} style={{display: 'flex', marginBottom: '10px'}}>
            <div id={id}>
                <img className="poster" src={profile_path ? img_300+profile_path : imgUnavailable} alt={name}/>
                <h4>{name}</h4>
                <div className="info">{known_for_department}</div>
                <div className="vote">{popularity}</div>
            </div>
        </div>
    )
}

