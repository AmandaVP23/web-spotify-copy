import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import { setupAPI } from './api';

class App extends Component {
    state = {
        isReady: false,
    };

    async componentDidMount() {
        await setupAPI();

        this.setState({
            isReady: true,
        });
    }

    render() {
        const {
            isReady,
        } = this.state;

        if (!isReady) return null;

        return (
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        );
    }
}

export default App;
