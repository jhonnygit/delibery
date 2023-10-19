//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Fonts, Images } from '../contants';
import { Display } from '../utils';

const WelcomeCard = ({title,content,image}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Images[image]} resizeMode="contain"/>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.contentText}>{content}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:Display.setWidth(100),
    },
    image:{
        height:Display.setHeight(30),
        width:Display.setWidth(60),
    },
    titleText:{
        fontSize:22,
        fontFamily:Fonts.POPPINS_BOLD,
    },
    contentText:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_LIGHT,
        textAlign:'center',
        marginHorizontal:20,
    },
});

//make this component available to the app
export default WelcomeCard;
