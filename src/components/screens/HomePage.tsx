import React, { Component } from 'react';
import { average } from 'color.js';
import axios from 'axios';
import moment from 'moment';
import { personalizedRecommendationsURL } from '../../utils/constants/endpoints';
import PlayButton from '../elements/PlayButton';
import ElementCard from '../elements/ElementCard';

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
                <div className="home-page__title">
                    <h1 className="heading-primary">Boa tarde</h1>
                </div>
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

                {/* Reproduzido recentemente */}
                <div className="home-page__title">
                    <h2 className="heading-secondary">Reproduzido recentemente</h2>
                    <a className="grey-uppercase-link" href="">Ver tudo</a>
                </div>
                <section className="home-page__inline-grid u-margin-bottom-big">
                    <ElementCard
                        imgUrl="https://i.scdn.co/image/ab67706c0000da845ab0603a99da67bac16c6e9d"
                        title="~ now"
                        subtitle="De amandavp"
                        showPause
                    />
                    <ElementCard
                        imgUrl="https://i.scdn.co/image/a7839df3ad5dd0de6a95bbbbff9b7e72b16af91c"
                        title="Finneas"
                        subtitle="Artista"
                        imgRounded
                    />
                    <ElementCard
                        imgUrl="https://i.scdn.co/image/ab67706f000000028f7cea2939220d6a326924fa"
                        title="Soft Rock"
                        subtitle="The great masterpieces of the genre"
                    />
                    <ElementCard
                        imgUrl="https://i.scdn.co/image/480468924609319ff2c0ed518082be473793552a"
                        title="Khalid"
                        subtitle="Artista"
                        imgRounded
                    />
                    <ElementCard
                        imgUrl="https://i.scdn.co/image/ab67616d0000b273a01fed49fe3a84a9919cef29"
                        title="Justice"
                        subtitle="Justin Bieber"
                    />
                    <ElementCard
                        imgUrl="https://i.scdn.co/image/ab67616d0000b27395b3744a4e137e68051cf809"
                        title="When It's All Said And Done... Take Time"
                        subtitle="Giveon"
                    />
                    <ElementCard
                        imgUrl="https://i.scdn.co/image/ab676161000051743e766ab28cfddac0f8b60046"
                        title="Giveon"
                        subtitle="Artista"
                        imgRounded
                    />
                    <ElementCard
                        imgUrl="https://i.scdn.co/image/ab67706f00000002ee6b910e4a167a42da3e39c5"
                        title="This Is Billie Eilish"
                        subtitle="Latest track Your Power and other hits"
                        imgRounded
                    />
                </section>

                {/*Made for you*/}
                <div className="home-page__title">
                    <h2 className="heading-secondary">Made for amandavp</h2>
                    <a className="grey-uppercase-link" href="">Ver tudo</a>
                </div>
                <section className="home-page__inline-grid u-margin-bottom-big">
                    <ElementCard
                        imgUrl="https://dailymix-images.scdn.co/v2/img/1a81cce45919b84a588bb1f277e9ec818ff64f92/1/pt/default"
                        title="Mix do Dia 1"
                        subtitle="Justin Bieber, JP Saxe, Camilla Cabello e mais"
                    />
                    <ElementCard
                        imgUrl="https://dailymix-images.scdn.co/v2/img/3e1c4b379a496e333ea96847b2f5d75a0d911d6c/2/pt/default"
                        title="Mix do Dia 2"
                        subtitle="Nick Jonas, Khalid, Billie Eilish e mais"
                    />
                    <ElementCard
                        imgUrl="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb3e766ab28cfddac0f8b60046/3/pt/default"
                        title="Mix do Dia 3"
                        subtitle="Giveon, Janelle Monáe, Santino Le Saint e mais"
                    />
                    <ElementCard
                        imgUrl="https://dailymix-images.scdn.co/v2/img/168a281f4a0b1c2c61acb010239ead4710a234a3/4/pt/default"
                        title="Mix do Dia 4"
                        subtitle="Kings of Leon, Imagine Dragon, Travis e mais"
                    />
                    <ElementCard
                        imgUrl="https://dailymix-images.scdn.co/v2/img/60cfab40c6bb160a1906be45276829d430058005/5/pt/default"
                        title="Mix do Dia 5"
                        subtitle="Drake, Always Never, Frank Ocean e mais"
                    />
                    <ElementCard
                        imgUrl="https://dailymix-images.scdn.co/v2/img/e8469ef3c4e45f9574dc963a69043ac3f3e58d41/6/pt/default"
                        title="Mix do Dia 6"
                        subtitle="Avenged Sevenfold, Foo Fighters, Stone Sour e mais"
                    />
                    <ElementCard
                        imgUrl="https://newjams-images.scdn.co/v3/release-radar/9a0055f65c4f9e6d58dd480ecf6ecc7ecfb2e90a/pt-PT/default"
                        title="Radar de Novidades"
                        subtitle="Fica a par das últimas músicas dos artistas que segues e de novos singles escolhidos para ti. Atualizações à sexta."
                    />
                    <ElementCard
                        imgUrl="https://newjams-images.scdn.co/v3/discover-weekly/YmtGcaUIOUB8LKEhJSeXxkeSBsxoWc7M7JAkEC9XAl57KbiTsTHnWdZxHlfRJ4C4GMnvEBEDXq6xDbFnrsVkFtI11QblWZDYTT1gnBnWxak=/ODQ6OTA6MzBUMzAtNjAtMQ==/default"
                        title="Descobertas da Semana"
                        subtitle="A tua mixtape semanal de música nova. Ouve novidades e clássicos escolhidos para ti. Atualizada todas as segundas."
                    />
                </section>


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