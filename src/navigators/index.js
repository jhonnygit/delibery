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
 } from "../screens";

const stack=createStackNavigator();

const Navigators=()=>{
    return(
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown:false}}>                
                <stack.Screen name="Splash" component={SplashScreen}/>
                <stack.Screen name="Welcome" component={WelcomeScreen}/>
                <stack.Screen name="Signin" component={SigninScreen}/>
                <stack.Screen name="Signup" component={SignupScreen}/>
                <stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
                <stack.Screen name="RegisterPhone" component={RegisterPhoneScreen}/>
                <stack.Screen name="Verification" component={VerificationScreen}/>
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigators;
