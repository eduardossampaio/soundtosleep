/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,  
  View
} from 'react-native';

import {Container,Content,Grid,Col,Row} from 'native-base'
import {Header,Left,Button,Icon,Body,Right,Title} from 'native-base'
import PlayButton from 'app/src/components/PlayButton'
export default class App extends Component<{}> {
  
  render() {    
      return (
        <Image
          style={{
            backgroundColor: '#ccc',
            flex: 1,
            resizeMode:'cover',            
            width: '100%',
            height: '100%',
          }}
          source={require("app/images/park.jpg")}
        >

        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              
            </Right>
          </Header>              
          <Content style={{marginTop:20}}>
            <Grid>
              <Row>
                <Col style={styles.column}>
                  <PlayButton/>
                </Col>
                <Col style={styles.column}>
                  <PlayButton/>
                </Col>
              </Row>
              <Row>
                <Col style={styles.column}>
                  <PlayButton/>
                </Col>
                <Col style={styles.column}>
                  <PlayButton/>
                </Col>
              </Row>
              <Row>
                <Col style={styles.column}>
                  <PlayButton/>
                </Col>
                <Col style={styles.column}>
                  <PlayButton/>
                </Col>
              </Row>
            </Grid>
          </Content>
        </Container>      


        </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bar:{
    height:56,
    justifyContent:'center',
    alignItems:'center'
  },
  bar_title:{
    fontSize:26
  },
  content:{
    backgroundColor:'blue',
    flex:1
  },
  column:{
    alignItems:'center',
    justifyContent:'center',
    height:150
  }
});
