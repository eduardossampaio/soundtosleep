import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    Image,
    Slider,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Display from 'react-native-display';

export default class App extends Component<{}> {

    constructor(props){
        super(props);
        this.state = {
            playing: false
        };
    }

    onItemClick() {
        var isPlaying = ! this.state.playing;
        this.setState({playing:isPlaying});
    }
    //play-circle-outline
    //pause-circle-outline
    render() {    
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback
                    onPress={()=> this.onItemClick()}
                    background={TouchableNativeFeedback.SelectableBackground()}> 
                    <View>                   
                        <Icon size={80} color="white" name={this.state.playing ? "play-circle-outline":"pause-circle-outline"}/>
                    </View>
                    
                </TouchableNativeFeedback>
                <Text style={styles.text}>Passaros</Text>
                <Display
                    enterDuration={250} 
                    exitDuration={250}
                    exit="fadeOut"
                    enter="fadeIn"
                    enable={this.state.playing}>
                    
                    <Slider 
                        maximumTrackTintColor='white'
                        thumbTintColor='white'                    
                        value={100}
                        style={{width:100}} minimumValue={0} maximumValue={100}/>
                </Display>        
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'center',
      alignItems: 'center',
    },
    text:{
        color:'white',
        fontSize:16
    }    
});