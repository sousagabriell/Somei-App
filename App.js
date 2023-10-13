import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpStep1 from './screens/SignUp/Step1';
import SignUpStep2 from './screens/SignUp/Step2';
import SignUpStep3 from './screens/SignUp/Step3';
import BreakLogin from './screens/BreakLogin';
import Home from './screens/Home';
import SelectProduct from './screens/SelectProduct';
import SelectExit from './screens/NewFlow/SelectExit';
import ResumeSale from './screens/ResumeSale';
import theme from './paperTheme'; // Importe o tema personalizado
import { PaperProvider } from 'react-native-paper';


const customTheme = {
  ...theme,
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BreakLogin" screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="BreakLogin"
            component={BreakLogin}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpStep1}
          />
          <Stack.Screen
            name="SignUpStep2"
            component={SignUpStep2}
          />
           <Stack.Screen
            name="SignUpStep3"
            component={SignUpStep3}
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
          <Stack.Screen
            name="ResumeSale"
            component={ResumeSale}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
