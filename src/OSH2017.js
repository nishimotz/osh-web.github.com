import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Subheader from 'material-ui/Subheader'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {red500, green500} from 'material-ui/styles/colors'

import './App.css'
import Hero from './2017/components/Hero'
import Speaker from './2017/components/Speaker'
import { speakers } from 'toml!./2017/speaker.toml'
import h from 'react-hyperscript'

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: red500,
        accent1Color: green500
    },
    appBar: {
        height: 50,
    },
});

const sponsors = [
    {
        url: 'http://www.orange.co.jp/',
        name: '株式会社オレンジシステム広島',
        image: '/img/orange_468.png',
        type: 'platinum',
    },
    {
        url: 'https://www.nextvision.co.jp/',
        name: '株式会社ネクストビジョン',
        image: '/img/nextvision_234.png',
        type: 'silver',
    }
];

const Sponsor = ({url, name, image, type}) => {
    const type2width = {
        'silver': 117,
        'gold': 234,
        'platinum': 234,
    };
    const type2opacity = {
        'silver': 0.8,
        'gold': 1,
        'platinum': 1,
    };
    const style = {
        width: type2width[type],
        opacity: type2opacity[type],
    };
    return h('div', {},
        h('a', {href: url},
            h('img', {src: image, alt: name, style })
        )
    );
};

const Sponsors = () => {
    const style = {
        textAlign: 'center'
    };
    return h('div', {style},
        sponsors.map((props) => { return h(Sponsor, props); })
    );
};

const Content = () => {
    let Speakers = speakers.map((speaker) => {
        return h(Speaker, {key: speaker.furi, ...speaker});
    });

    const centering = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    };

    const style = {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 5,
        marginRight: 5,
        ...centering
    };

    return h('div', {style}, [
        h(Hero, {style: {display: 'block', width: 640}}),
        h(Subheader, "スピーカー"),
        Speakers,
        h(Subheader, "スポンサー"),
        h(Sponsors)
        ]
    )
};

const App = () => {
    return h(MuiThemeProvider, {muiTheme},
        h('div', [
                h(AppBar, {
                    title: "オープンセミナー2017@広島",
                    iconClassNameRight: "muidocs-icon-navigation-expand-more",
                    titleStyle: {'font-size': 16}
                }),
                h(Content)
            ]
        )
    );
};

export default App;