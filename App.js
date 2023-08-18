import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './screens/SignUp';
import BreakLogin from './screens/BreakLogin';
import Home from './screens/Home';
import SelectProduct from './screens/SelectProduct';
import SelectExit from './screens/NewFlow/SelectExit';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="BreakLogin" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="BreakLogin"
          component={BreakLogin}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
               <Stack.Screen
          name="Home"
          component={Home}
        />
         <Stack.Screen
          name="SelectProduct"
          component={SelectProduct}
        />
        <Stack.Screen
          name="SelectExit"
          component={SelectExit}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
