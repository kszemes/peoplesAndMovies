import React from 'react'
import {useQuery} from 'react-query'
import {getData, noPicture, img_300} from "../utils/dbUtils.js";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css'
import {getMovieCredits} from "../utils/dbUtils.js";
import {NavLink} from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();
const responsive = {
    0: {items: 3},
    512: {items: 5},
    1024: {items: 7}
}
export const Carousel = ({id}) => {
    const {data, status} = useQuery(['credits', getMovieCredits(id)], getData)
    let items = [];
    status === 'success' &&
    (() => {
        let casts = data.cast;
        items = status === 'success' ?
            casts.map(cast => (
                <NavLink to={(`/people/${cast.id}`)}>
                    <div className="carousel-item">
                        <img className="carousel-img" src={cast.profile_path ? img_300 + cast.profile_path : noPicture}
                             alt={cast?.name}
                             onDragStart={handleDragStart}
                        />
                        <b className="carousel-text">{cast?.name}</b>
                    </div>
                </NavLink>
            ))
            : []
    })();
    return (
        <AliceCarousel mouseTracking autoplay infinite
                       disableButtonsControls
                       disableDotsControls
                       items={items}
                       responsive={responsive}
        />
    )
}