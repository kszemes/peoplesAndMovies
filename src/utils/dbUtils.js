import axios from "axios";
export const getData = async ({queryKey}) => {
    const url = queryKey[1]
    const resp = await axios.get(url)
    return resp.data
}
export const getApiKey = () => {
    return `${import.meta.env.VITE_API_KEY}`;
}
export const getMoviesByPeople = (person_id, page) => {
    return `${theMovieDBMoviesByPeoplePrefix}?api_key=${getApiKey()}&page=${page}&with_people=${person_id}&sort_by=primary_release_date.asc`
}
export const getPeopleAllDetails = (person_id) => {
    return `${theMovieDbPeopleApiPrefix}${person_id}?api_key=${getApiKey()}`
}
export const getPeopleOriginalImage = (profile_path) => {
    return `${img_original}${profile_path}`
}
export const getPeopleImageSize300 = (profile_path) => {
    return `${img_300}${profile_path}`
}
export const searchPeoplesByName = (searchText, page) => {
    return `${theMovieDBPeopleSearchPrefix}?api_key=${getApiKey()}&query=${searchText}&page=${page}`
}
export const theMovieDbPeopleApiPrefix = 'https://api.themoviedb.org/3/person/';
export const theMovieDBPeopleSearchPrefix = 'https://api.themoviedb.org/3/search/person';
export const theMovieDBMoviesByPeoplePrefix = 'https://api.themoviedb.org/3/discover/movie';
export const img_300 = "https://image.tmdb.org/t/p/w300"
export const img_original = "https://image.tmdb.org/t/p/original"
export const imgUnavailable = "https://www.movienewz.com/img/films/poster-holder.jpg"