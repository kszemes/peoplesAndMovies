import React from "react";
import './App.css'
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header.jsx";
import {SearchBar} from "./components/SearchBar.jsx";

const queryClient = new QueryClient();
function App() {

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Header/>
                <SearchBar/>
                <div className="app">
                    <Routes>
{/*                        <Route path="/" element={<ApiTest/>}/>*/}
                    </Routes>
                </div>
            </QueryClientProvider>
        </BrowserRouter>

    )
}

export default App
