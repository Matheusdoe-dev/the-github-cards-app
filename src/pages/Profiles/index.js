import React from 'react';
// elementos
import Container from './../../styles/containers/container';
import Header from './../../components/Header/index'
// componentes
import CardList, { testData } from './../../components/CardList/index';


class Profiles extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   };
  // }

  state = {
    profiles: testData,
  };
  
  render(){
    return(
      <Container>
          <Header />

          <CardList profiles={this.state.profiles} />
      </Container>
    );
  }
}

export default Profiles;