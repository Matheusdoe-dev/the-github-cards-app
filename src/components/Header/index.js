import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer } from './styles';
import Title from './../../styles/elements/title';

class Card extends React.Component {
    render(){
        return(
            <HeaderContainer>
                <Title>The GitHub Cards App</Title>
                
                <nav>
                    <ul>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/profiles">Profiles</Link></li>
                    </ul>
                </nav>
            </HeaderContainer>
        );
    }
}

export default Card;