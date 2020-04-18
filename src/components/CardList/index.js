import React from 'react';
import Card from './../Card/index';

import { CardListContainer } from './styles';

const testData = [
    {name: "Matheus do É Santos", avatar_url: "https://avatars1.githubusercontent.com/u/58111490?v=4", company: "None"},
    {name: "Glaucia Lemos", avatar_url: "https://avatars0.githubusercontent.com/u/1631477?v=4", company: "@Microsoft "},
    {name: "Lucas Santos", avatar_url: "https://avatars1.githubusercontent.com/u/3200560?v=4", company: "Cloud Advocate LATAM @microsoft"},
    {name: "Marco Bruno", avatar_url: "https://avatars1.githubusercontent.com/u/4096456?v=4", company: "CollabCode"},
];

class CardList extends React.Component{
    render(){
        return(
            <CardListContainer>
                {testData.map(profile => <Card { ...profile} />)}
            </CardListContainer>
        );
    }
};

// [ <Card />, <Card />, <Card /> ]
// [React.createElement(), React.createElement(), React.createElement()];

export default CardList;