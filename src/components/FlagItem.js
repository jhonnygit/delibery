//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from '../contants';
import { StaticImageService } from '../services';

// create a component
const FlagItem = ({code,name,dial_code,onPress}) => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={()=>onPress({code,name,dial_code})}>
            <Image 
                style={styles.flagImage}
                source={{url:StaticImageService.getFlagIcon(code)}}/>
            <Text style={styles.flagText}>{dial_code}</Text>
            <Text style={styles.flagText}>{name}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',        
        alignItems: 'center',
        paddingHorizontal:10,
    },
    flagImage:{
        height:25,
        width:25,
        marginRight:10,
    },
    flagText:{
        fontSize:14,
        lineHeight:14*1.4,
        color:Colors.DEFAULT_BLACK,
        fontFamily:Fonts.POPPINS_MEDIUM,
        marginRight:10,
    },
});

//make this component available to the app
export default FlagItem;

