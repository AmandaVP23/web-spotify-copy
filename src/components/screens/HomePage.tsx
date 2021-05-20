import React, { Component } from 'react';
import { average } from 'color.js';
import axios from 'axios';
import moment from 'moment';
import { personalizedRecommendationsURL } from '../../utils/constants/endpoints';
import PlayButton from '../elements/PlayButton';

interface ContentItem {
    id: string;
    name: string;
    href: string;
    type: string;
    images: Array<{
        url: string;
    }>
}

interface OwnProps {
    calculateColor(): void;
}

interface OwnState {
    color: string;
    shortcuts: Array<ContentItem>;
}

class HomePage extends Component<OwnProps, OwnState> {
    state = {
        color: '',
        shortcuts: [],
    }

    async componentDidMount() {
        this.requestRecommendations();

        const color = await average('https://images.unsplash.com/photo-1620741475287-bc63efcadca6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80', {
            format: 'hex',
        });

        this.setState({
            color: color.toString(),
        })
    }


    requestRecommendations = () => {
        axios.get(personalizedRecommendationsURL({
            timestamp: moment().format('YYYY-MM-DDTHH:mm:ss'),
            platform: 'web',
            content_limit: 10,
            limit: 20,
            types: 'album,playlist,artist,show,station,episode',
            image_style: 'gradient_overlay',
            country: 'PT',
            locale: 'pt-PT',
            market: 'from_token'
        })).then(response => {
            const { content } = response.data;
            const { items } = content;
            console.log(items);
            const shortcutItem = items.find((i: any) => i.id === 'shortcuts');

            if (shortcutItem) {
                console.log(shortcutItem);
                this.setState({
                    shortcuts: shortcutItem,
                })
            }
        }).catch(() => {});
    }

    render() {
        // todo -> mudar boa tarde, bom dia, boa noite dependendo da hora local

        return (
            <section className="home-page">
                <h1 className="heading-primary u-margin-bottom-small">Boa tarde</h1>
                <section className="home-page__main u-margin-bottom-big">
                    <div className="home-page__main__item">
                        <img src="https://i.scdn.co/image/ab67706c0000da845ab0603a99da67bac16c6e9d" alt="~ now" />
                        <div className="home-page__main__item__info">
                            <a className="link" href="" title="~ now">~ now</a>
                            <PlayButton showPause />
                        </div>
                    </div>
                    <div className="home-page__main__item">
                        <img src="https://i.scdn.co/image/ab676161000051743e766ab28cfddac0f8b60046" alt="Giveon" />
                        <div className="home-page__main__item__info">
                            <a className="link" href="" title="Giveon">Giveon</a>
                            <PlayButton />
                        </div>
                    </div>
                    <div className="home-page__main__item">
                        <img src="https://i.scdn.co/image/46ea4632e2ada3950923c07f1c4508cf40f8daef" alt="Foo Fighters" />
                        <div className="home-page__main__item__info">
                            <a className="link" href="" title="Foo Fighters">Foo Fighters</a>
                            <PlayButton />
                        </div>
                    </div>
                    <div className="home-page__main__item">
                        <img src="https://i.scdn.co/image/ab67706f000000029cf2e21a96f217de5d3abf60" alt="This Is Justin Bieber" />
                        <div className="home-page__main__item__info">
                            <a className="link" href="" title="This Is Justin Bieber">This Is Justin Bieber</a>
                            <PlayButton />
                        </div>
                    </div>
                    <div className="home-page__main__item">
                        <img src="https://i.scdn.co/image/ab67706f0000000287cf31b31e27b33e21c452e8" alt="This Is Kings of Leon" />
                        <div className="home-page__main__item__info">
                            <a className="link" href="" title="This Is Kings of Leon">This Is Kings of Leon</a>
                            <PlayButton />
                        </div>
                    </div>
                    <div className="home-page__main__item">
                        <img src="https://i.scdn.co/image/949d57988ca389b49133ebd6f8f99ef96fb52ab8" alt="Imagine Dragons" />
                        <div className="home-page__main__item__info">
                            <a className="link" href="" title="Imagine Dragons">Imagine Dragons</a>
                            <PlayButton />
                        </div>
                    </div>
                    <div className="home-page__main__item">
                        <img src="https://i.scdn.co/image/ab67706f0000000283a10c558cedf4e04e3f59c5" alt="This Is Shawn Mendes" />
                        <div className="home-page__main__item__info">
                            <a className="link" href="" title="This Is Shawn Mendes">This Is Shawn Mendes</a>
                            <PlayButton />
                        </div>
                    </div>
                    <div className="home-page__main__item">
                        <img src="https://i.scdn.co/image/ab67706c0000da849f661a3d8470ae048438137a" alt="_random" />
                        <div className="home-page__main__item__info">
                            <a className="link" href="" title="_random">_random</a>
                            <PlayButton />
                        </div>
                    </div>
                    <div className="home-page__main__item">
                        <img src="https://i.scdn.co/image/ab676161000051745bbdead0a1a9d4894a11bdaf" alt="JP Saxe" />
                        <div className="home-page__main__item__info">
                            <a className="link" href="" title="JP Saxe">JP Saxe</a>
                            <PlayButton />
                        </div>
                    </div>
                    <div className="home-page__main__item">
                        <img src="https://i.scdn.co/image/ab676161000051740d56b9d9ad60c8b38443647f" alt="Santino Le Saint" />
                        <div className="home-page__main__item__info">
                            <a className="link" href="" title="Santino Le Saint">Santino Le Saint</a>
                            <PlayButton />
                        </div>
                    </div>
                </section>
                <h2 className="heading-secondary">Reproduzido recentemente</h2>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
            </section>
        )
    }
}

export default HomePage;