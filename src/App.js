import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
// import createBH from 'history/createBrowserHistory'
//
// const history = createBH();

import MainPage from "./containers/main_page/main_page"
import PostId_page from "./containers/Post_id/postid_page"

function App() {
    return (
        <>
            <BrowserRouter>
                <Route exact path="/" component={MainPage}/>
                <Route path="/post/:post_id" component={PostId_page}/>

            </BrowserRouter>
        </>

        // <div className="App-wrapper">
        // <Header />
        // <Posts />
        // <R_menu />
        // </div>
    );
}

export default App;
