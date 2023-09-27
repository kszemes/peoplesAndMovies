import {useState} from "react";
import {getApiKey, getData, theMovieDBPeopleSearchPrefix} from "../utils/dbUtils.js";
import {useQuery} from "react-query";
import {ContentPagination} from "./ContentPagination.jsx";
import {PeopleSearchDetails} from "./PeopleSearchDetails.jsx";

export const PeopleSearchResults = ({searchText}) => {
    const [page, setPage] = useState(1)
    const urlSearch = `${theMovieDBPeopleSearchPrefix}?api_key=${getApiKey()}&query=${searchText}&page=${page}`
    const {data, status} = useQuery(['searchedItems', urlSearch], getData)
    return (
        <div className="content">
            {status === 'success' && data.results.length > 0 ?
                data.results.map(obj => (
                    <PeopleSearchDetails
                        key={obj.id}
                        adult={obj.adult}
                        gender={obj.gender}
                        id={obj.id}
                        known_for_department={obj.known_for_department}
                        name={obj.name}
                        original_name={obj.original_name}
                        popularity={obj.popularity}
                        profile_path={obj.profile_path}
                        known_for={obj.known_for}
                    />
            ))
                :
                <div>no {searchText} found...</div>
            }
            {status === 'success' && <ContentPagination page={page} setPage={setPage} numOfPage={data.total_pages > 500 ? 500 : data.total_pages}/>}
        </div>
    )
}