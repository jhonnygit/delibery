import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SigninScreen, SplashScreen, WelcomeScreen } from "../screens";

const stack=createStackNavigator();

const Navigators=()=>{
    return(
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown:false}}>                
                <stack.Screen name="Splash" component={SplashScreen}/>
                <stack.Screen name="Welcome" component={WelcomeScreen}/>
                <stack.Screen name="Signin" component={SigninScreen}/>
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigators;
