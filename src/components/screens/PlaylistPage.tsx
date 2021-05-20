import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { MatchParams } from '../../utils/constants/misc';
import { playlistsList } from '../../data/playlistsList';
import { average } from 'color.js';

interface OwnProps extends RouteComponentProps<MatchParams> {}

interface OwnState {
    playlist: any;
    color: string;
}

class PlaylistPage extends Component<OwnProps, OwnState> {
    state = {
        playlist: {
            id: '',
            name: '',
            owner: '',
            description: '',
            thumbnail: ''
        },
        color: '',
    }

    async componentDidMount() {
        const { match } = this.props;
        const { params } = match;

        if (params && params.id) {
            const playlist = playlistsList.find(p => p.id === Number(params.id));

            if (playlist) {
                const color = await average(playlist.thumbnail, {
                    format: 'hex',
                });

                this.setState({
                    playlist,
                    color: color.toString(),
                })
            }
        }
    }

    render() {
        const { playlist, color } = this.state;

        if (!playlist) return;

        return (
            <div
                style={{
                    height: '40px',
                    width: '100%',
                    backgroundColor: color,
                }}
            >
                olá
            </div>
        )
    }
}

export default withRouter(PlaylistPage);