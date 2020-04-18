import React from 'react';
// elementos
import Container from './../../styles/containers/container';
// componentes
import Form from './../../components/Form/index';
import Header from './../../components/Header/index';


class Profiles extends React.Component {
  render(){
    return(
      <Container>
          <Header />

          <Form />
      </Container>
    );
  }
}

export default Profiles;