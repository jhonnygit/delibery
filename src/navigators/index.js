import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { 
    SigninScreen,
    SplashScreen,
    WelcomeScreen,
    SignupScreen,
    ForgotPasswordScreen,
    RegisterPhoneScreen,
    VerificationScreen,
    HomeScreen,
    RestaurantScreen,
 } from "../screens";

import {useSelector,useDispatch} from 'react-redux';
import { GeneralAction } from "../actions";
import { useEffect } from "react";

const stack=createStackNavigator();

const Navigators=()=>{
    const {isAppLoading,token,isFirstTimeUse}=useSelector(
        state=>state?.generalState,
    );

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(GeneralAction.appStart())
    },[]);

    return(
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown:false}}>
            {isAppLoading?(
                <stack.Screen name="Splash" component={SplashScreen}/>
            ): !token ? (
            <>                  
                {isFirstTimeUse && (
                  <stack.Screen name="Welcome" component={WelcomeScreen}/>  
                )}                
                <stack.Screen name="Signin" component={SigninScreen}/>
                <stack.Screen name="Signup" component={SignupScreen}/>
                <stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
                <stack.Screen name="RegisterPhone" component={RegisterPhoneScreen}/>
                <stack.Screen name="Verification" component={VerificationScreen}/>
            </>            
            ):(
                <>
                <stack.Screen name='Home' component={HomeScreen} />
                <stack.Screen name='Home' component={RestaurantScreen} />
                </>
            )}
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigators;
