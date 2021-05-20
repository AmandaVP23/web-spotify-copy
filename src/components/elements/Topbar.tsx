import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { MatchParams } from '../../utils/constants/misc';
import { COLLECTION_ROUTE } from '../../utils/constants/routes';

interface OwnProps extends RouteComponentProps<MatchParams> {}

interface OwnState {}

class Topbar extends Component<OwnProps, OwnState> {
    render() {
        const { location } = this.props;
        const { pathname } = location;

        return (
            <header className="topbar">
                topbar
                {pathname.startsWith(COLLECTION_ROUTE) && (
                    "collection route"
                )}
            </header>
        )
    }
}

export default withRouter(Topbar);