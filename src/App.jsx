import React from "react";
import './App.css'
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header.jsx";
import {SearchBar} from "./components/SearchBar.jsx";
import {PeopleAllDetails} from "./components/PeopleAllDetails.jsx";

const queryClient = new QueryClient();

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Header/>
                <Routes>
                    <Route path="/" element={<SearchBar/>}/>
                    <Route path="/people/:id" element={<PeopleAllDetails />}/>
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

export default App
