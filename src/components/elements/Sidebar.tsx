import React, { Component } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { INDEX_ROUTE, PLAYLIST_COLLECTION_ROUTE, SEARCH_ROUTE } from '../../utils/constants/routes';
import HomeIcon from '../icons/HomeIcon';
import { MatchParams } from '../../utils/constants/misc';
import BigLogo from '../icons/BigLogo';
import SearchIcon from '../icons/SearchIcon';
import LibraryIcon from '../icons/LibraryIcon';
import { playlistsList } from '../../data/playlistsList';
import axios from 'axios';

interface OwnProps extends RouteComponentProps<MatchParams> {}

interface OwnState {
    list: Array<any>;
}

class Sidebar extends Component<OwnProps, OwnState> {
    state = {
        list: [],
    }

    componentDidMount() {
        this.getPlaylistsList();
    }

    getPlaylistsList = () => {
        axios.get('https://spclient.wg.spotify.com/playlist/v2/user/amandavp/rootlist?decorate=revision%2Clength%2Cattributes%2Ctimestamp%2Cowner&bustCache=1620829839934')
            .then(response => {
                console.log(response.data);
            })
            .catch(() => {})
    }

    render() {
        const { location } = this.props;
        const { pathname } = location;

        return (
            <div className="sidebar">
                <Link to={INDEX_ROUTE} className="sidebar__icon-link">
                    <BigLogo />
                </Link>
                <nav className="sidebar__nav">
                    <Link
                        className={pathname === INDEX_ROUTE ? 'sidebar__nav__item sidebar__nav__item--active' : 'sidebar__nav__item'}
                        to={INDEX_ROUTE}
                    >
                        <HomeIcon />
                        <span>Início</span>
                    </Link>
                    <Link
                        className={pathname === SEARCH_ROUTE ? 'sidebar__nav__item sidebar__nav__item--active' : 'sidebar__nav__item'}
                        to={SEARCH_ROUTE}
                    >
                        <SearchIcon />
                        <span>Procurar</span>
                    </Link>
                    <Link
                        className={pathname === PLAYLIST_COLLECTION_ROUTE ? 'sidebar__nav__item sidebar__nav__item--active' : 'sidebar__nav__item'}
                        to={PLAYLIST_COLLECTION_ROUTE}
                    >
                        <LibraryIcon />
                        <span>A tua biblioteca</span>
                    </Link>
                </nav>
                <div className="sidebar__divider" />
                <ul className="sidebar__playlists">
                    {Object.keys(playlistsList).map(k => {
                        const playlist = playlistsList[Number(k)];

                        return (
                            <li
                                key={playlist.id}
                                className="sidebar__playlists__item">
                                {playlist.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default withRouter(Sidebar);