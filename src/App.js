import React from 'react';
// elementos
import Container from './styles/containers/container';
import Title from './styles/elements/title';
import Header from './styles/elements/header';
// componentes
import CardList from './components/CardList/index';


class App extends React.Component {
  render(){
    return(
      <Container>
          <Header><Title>The GitHub Cards App</Title></Header>

          <CardList />
      </Container>
    );
  }
}

export default App;
