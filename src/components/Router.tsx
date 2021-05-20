import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Sidebar from './elements/Sidebar';
import ControlsBar from './elements/ControlsBar';
import HomePage from './screens/HomePage';
import {
    INDEX_ROUTE,
    NOT_FOUND_ROUTE,
    PLAYLIST_COLLECTION_ROUTE,
    PLAYLIST_ROUTE,
    SEARCH_ROUTE
} from '../utils/constants/routes';
import Topbar from './elements/Topbar';
import SearchPage from './screens/SearchPage';
import PlaylistPage from './screens/PlaylistPage';

interface OwnProps {}

interface OwnState {}

class Router extends Component<OwnProps, OwnState> {

    calculateColor = () => {
        console.log("calculate color");
    }

    render() {
        return (
            <Switch>
                <Route exact path={NOT_FOUND_ROUTE}>
                    NOT FOUND PAGE
                </Route>

                <div className="app-container">
                    <Sidebar />
                    <div className="main-container">
                        <Topbar />
                        <Switch>
                            <Route exact path={INDEX_ROUTE}>
                                <HomePage calculateColor={this.calculateColor} />
                            </Route>
                            <Route exact path={SEARCH_ROUTE}>
                                <SearchPage />
                            </Route>
                            <Route exact path={PLAYLIST_COLLECTION_ROUTE}>
                                PLAYLIST COLLECTION
                            </Route>
                            <Route exact path={PLAYLIST_ROUTE}>
                                <PlaylistPage />
                            </Route>

                            <Redirect to={NOT_FOUND_ROUTE} />
                        </Switch>
                    </div>
                    <ControlsBar />
                </div>
            </Switch>
        )
    }
}

export default Router;


// render() {
//     return (
//         <div className="app-container">
//             <Sidebar />
//             <div className="main-container">
//                 <Topbar />
//                 <Switch>
//                     <Route exact path={NOT_FOUND_ROUTE}>
//                         NOT FOUND PAGE
//                     </Route>
//                     <Route exact path={INDEX_ROUTE}>
//                         <HomePage calculateColor={this.calculateColor} />
//                     </Route>
//                     <Route exact path={SEARCH_ROUTE}>
//                         <SearchPage />
//                     </Route>
//
//                     <Redirect to={NOT_FOUND_ROUTE} />
//                 </Switch>
//             </div>
//             <ControlsBar />
//         </div>
//     )
// }