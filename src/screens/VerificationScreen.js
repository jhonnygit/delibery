//import liraries
import React, { useRef,useState } from 'react';
import { View, Text, StyleSheet,StatusBar,TextInput,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, Fonts } from '../contants';
import { Display } from '../utils';
import { Separator} from '../components';

// create a component


const VerificationScreen = ({
    route:{
        params:{phoneNumber}
    },
}) => {
    const firstInput=useRef();
    const secondInpunt=useRef();
    const thirdInpunt=useRef();
    const fourthInpunt=useRef();
    const [opt,setOpt]=useState({1:'',2:'',3:'',4:''})
    
    return (
        <View style={styles.container}>
            <StatusBar 
                barStyle="dark-content"
                backgroundColor={Colors.DEFAULT_WHITE}
                translucent
            />
            <Separator height={StatusBar.currentHeight}/>
            <View style={styles.headerContainer}>
                <Ionicons 
                    name="chevron-back-outline"
                    size={30}
                    onPress={()=>navigation.goBack()}
                />
                <Text style={styles.headerTitle}>OTP Verification</Text>
            </View>
            <Text style={styles.title}>OTP Verification</Text>
            <Text style={styles.content}>Enter the OTP number just sent you at{' '}
                <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
            </Text>
            <View style={styles.otpContainer}>
                <View style={styles.otpBox}>
                    <TextInput
                      style={styles.optText}
                      keyboardType="number-pad"
                      maxLength={1}
                      ref={firstInput}
                      onChangeText={text=>{
                        setOpt({...opt,1:text})
                        text && secondInpunt.current.focus();
                      }}/>
                </View>
                <View style={styles.otpBox}>
                    <TextInput
                      style={styles.optText}
                      keyboardType="number-pad"
                      maxLength={1}
                      ref={secondInpunt}
                      onChangeText={text=>{
                        setOpt({...opt,2:text})
                        text ? thirdInpunt.current.focus():firstInput.current.focus();
                      }}/>
                </View>
                <View style={styles.otpBox}>
                    <TextInput
                      style={styles.optText}
                      keyboardType="number-pad"
                      maxLength={1}
                      ref={thirdInpunt}
                      onChangeText={text=>{
                        setOpt({...opt,3:text})
                        text ? fourthInpunt.current.focus():secondInpunt.current.focus();
                      }}/>
                </View>
                <View style={styles.otpBox}>
                    <TextInput
                      style={styles.optText}
                      keyboardType="number-pad"
                      maxLength={1}
                      ref={fourthInpunt}
                      onChangeText={text=>{
                        setOpt({...opt,4:text})
                        !text && thirdInpunt.current.focus();
                      }}/>
                </View>
            </View>
            <TouchableOpacity style={styles.signinButton}
                onPress={()=>console.log(opt)}>
                <Text style={styles.signinButtonText}>Verify</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,       
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:20,
        paddingHorizontal:20,
    },
    headerTitle:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_MEDIUM,
        lineHeight:20*1.4,
        width:Display.setWidth(80),
        textAlign:'center',
    },
    title:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_MEDIUM,
        lineHeight:20*1.4,
        marginTop:20,
        marginBottom:10,
        marginHorizontal:20,
    },
    content:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_MEDIUM,        
        marginTop:10,
        marginBottom:20,
        marginHorizontal:20,
    },
    phoneNumberText:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_REGULAR,
        lineHeight:18*1.4,
        color: Colors.DEFAULT_YELLOW, 
    },
    otpContainer:{
        marginHorizontal:20,
        marginBottom:20,
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row',
    },
    otpBox:{
        borderRadius:5,
        borderColor:Colors.DEFAULT_GREEN,
        borderWidth:0.5,        
    },
    optText:{
        fontSize:25,
        color:Colors.DEFAULT_BLACK,
        padding:0,
        textAlign:'center',
        paddingHorizontal:18,
        paddingVertical:10,
    },
    signinButton:{
        backgroundColor:Colors.DEFAULT_GREEN,
        borderRadius:8,
        marginHorizontal:20,
        height:Display.setHeight(6),
        justifyContent:'center',
        alignItems:'center',
        marginTop:20, 
     },
     signinButtonText:{
         fontSize:18,
         lineHeight:18*1.4,
         color:Colors.DEFAULT_WHITE,
         fontFamily:Fonts.POPPINS_MEDIUM,
     },
});

//make this component available to the app
export default VerificationScreen;
