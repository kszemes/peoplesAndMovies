import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Button} from "@mui/material";
import {useState} from "react";
import {PeopleSearchResults} from "./PeopleSearchResults.jsx";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
export const SearchBar = () => {
    const [searchText, setSearchText] = useState("");
    const [fetchData, setFetchData] = useState(false);
    const handleChangeText = (e) => {
        setFetchData(false)
        setSearchText(e.target.value)
    }
    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar sx={{justifyContent: 'center'}}>
                        <Search>
                            <StyledInputBase sx={{minWidth: '350px'}}
                                             autoFocus={true}
                                             placeholder="Search People"
                                             inputProps={{'aria-label': 'search'}}
                                             onChange={handleChangeText}
                            />
                        </Search>
                        <Button variant='contained' onClick={() => setFetchData(true)}>
                            <SearchIcon/>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            {fetchData && <PeopleSearchResults searchText={searchText}/>}
        </div>
    );
};
