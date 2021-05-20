import React, { Component } from 'react';

interface OwnProps {} 

interface OwnState {}

class ControlsBar extends Component<OwnProps, OwnState> {

    render() {
        return (
            <section className="controls">
                Controls
            </section>
        )
    }
}

export default ControlsBar;