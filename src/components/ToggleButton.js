//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Animated, Easing } from 'react-native';
import { Colors } from '../contants';

const containerStyle=(size,isActive)=>({
    backgroundColor: isActive? Colors.DEFAULT_GREEN: Colors.DEFAULT_GREY ,
    height:32*size,
    width:64*size,
    borderRadius:32,
    padding:4*size,
});

const toggleStyle=(size,animatedValue)=>({
    backgroundColor:Colors.DEFAULT_WHITE,
    height:24*size,
    width:24*size,
    borderRadius:32,
    transform:[
        {
            translateX:animatedValue
        }
    ]    
});

// create a component
const ToggleButton = ({size}) => {
    const [isActive, setIsActive]=useState(false)
    const [animatedValue,setAnimatedValue]=useState(new Animated.Value(0))

    const toggleHandle=()=>{
        Animated.timing(animatedValue,{
            toValue:isActive? 0 : 32*size,
            duration:250,
            easing:Easing.bounce,
            delay:0,
            useNativeDriver:true,
        }).start();
        setIsActive(!isActive);
    }

    return (
        <TouchableOpacity 
            style={containerStyle(size,isActive)}
            onPress={()=>toggleHandle()}
            activeOpacity={0.8}>
            <Animated.View style={toggleStyle(size,animatedValue)} />
        </TouchableOpacity>
    );
};

export default ToggleButton;
