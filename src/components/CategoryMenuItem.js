//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { Colors, Fonts, Images } from '../contants';

// create a component
const CategoryMenuItem = ({name,logo,activeCategory,setActiveCategory}) => {
    return (
        <TouchableOpacity
            key={name}
            onPress={()=>setActiveCategory(name)}
            style={styles.category()}>
            <Image 
                source={Images[logo]}
                style={styles.categoryIcon(activeCategory===name)}
            />
            <Text style={styles.categoryText(activeCategory===name)}></Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    category:(marginTop=0)=>({
        alignItems:'center',
        marginTop
    }),
    categoryIcon:isActive=>({
        height:30,
        width:30,
        opacity:isActive ? 1: 0.5,
    }),
    categoryText:isActive=>({
        fontSize:10,
        lineHeight:10*1.4,
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:Colors.DEFAULT_WHITE,
        marginTop:5,
        opacity:isActive ? 1 : 0.5,
    }),
});

//make this component available to the app
export default CategoryMenuItem;
