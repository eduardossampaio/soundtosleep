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
          source={require("app/images/forest2.jpg")}
        >

          <Container>
            <Header style={styles.toolbar}>
              <Left style={{flex:1}}>
                <Button transparent>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body style={{flex:5}}>
                <Title>Floresta</Title>
              </Body>
              <Right style={{flex:1}}>
                
              </Right>
            </Header>              
            
            <View style={{flex:1,justifyContent:'center'}}>
              <View style={styles.row}>
                <View style={styles.column}>
                  <PlayButton/>
                </View>
                <View style={styles.column}>
                  <PlayButton/>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.column}>
                  <PlayButton/>
                </View>
                <View style={styles.column}>
                  <PlayButton/>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.column}>
                  <PlayButton/>
                </View>
                <View style={styles.column}>
                  <PlayButton/>
                </View>
              </View>
            </View>
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
  toolbar:{
    backgroundColor:'#00796B'
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
    flex:1
  },
  row:{
    height:150,    
    flexDirection:'row',
    justifyContent:'space-around'    
  },
  column:{
    flex:1
  }
});
