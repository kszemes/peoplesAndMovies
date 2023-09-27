import axios from "axios";

export const getData = async ({queryKey}) => {
    const url = queryKey[1]
    const resp = await axios.get(url)
    return resp.data
}

export const getApiKey = () => {
    return `${import.meta.env.VITE_API_KEY}`;
}

export const getPersonImage = (person_id) =>{
    return `${theMovieDbPeopleApiProfileImage}${person_id}`
}

export const theMovieDbPeopleApiPrefix = 'https://api.themoviedb.org/3/person/';
export const theMovieDbPeopleApiProfileImage = 'https://api.themoviedb.org/3/person/';
export const theMovieDBPeopleSearchPrefix = 'https://api.themoviedb.org/3/search/person';
export const img_300 = "https://image.tmdb.org/t/p/w300"
export const img_500 = "https://image.tmdb.org/t/p/w500"
export const imgUnavailable = "https://www.movienewz.com/img/films/poster-holder.jpg"
export const noPicture = "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"