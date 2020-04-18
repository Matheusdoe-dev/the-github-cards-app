import React from 'react';
// elementos
import Container from './../../styles/containers/container';
import Header from './../../components/Header/index'
// componentes
import CardList from './../../components/CardList/index';


class Profiles extends React.Component {
  render(){
    return(
      <Container>
          <Header />

          <CardList />
      </Container>
    );
  }
}

export default Profiles;