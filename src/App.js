import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
// import createBH from 'history/createBrowserHistory'
//
// const history = createBH();

import MainPage from "./containers/main_page/main_page"
import PostId_page from "./containers/Post_page_from_id/postid_page"
import Create_post from "./containers/Create_post/create_post"
import Auth from "./containers/auth/Auth";


function App() {
    return (
        <>
            <BrowserRouter>
                <Route exact path="/" component={MainPage}/>
                <Route path="/post/:post_id" component={PostId_page}/>
                <Route path="/createpost" component={Create_post}/>
                <Route path={"/auth/:type"} component={Auth}/>
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
