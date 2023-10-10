import { StatusBar } from "expo-status-bar";
import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Colors,Images } from "../contants";

const SplashScreen=()=>{
    return(
        <View style={styles.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor={Colors.DEFAULT_GREEN}
                translucent
            />
            <Image 
                source={Images.PLATE}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.titleText}>Delivery</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    image:{
        height:150,
        width:150,
    },
    titleText:{
        color:Colors.DEFAULT_WHITE,
        fontSize:32,
    }

});

export default SplashScreen;