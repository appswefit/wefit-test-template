import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 32px;
`;

const Title = styled.span`
  font-size: 32px;
  font-weight: bold;
`;

class HelloWorldPage extends Component {
  render() {
    return (
      <Container>
        <Title>Hello World</Title>
      </Container>
    );
  }
}

export default HelloWorldPage;
