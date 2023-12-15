import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SignUpStep1 from './screens/SignUp/Step1';
import SignUpStep2 from './screens/SignUp/Step2';
import SignUpStep3 from './screens/SignUp/Step3';
import BreakLogin from './screens/BreakLogin';
import Home from './screens/Home';
import SelectProduct from './screens/SelectProduct';
import SelectExit from './screens/NewFlow/SelectExit';
import ResumeSale from './screens/ResumeSale';
import SellerSelect from './screens/SellerSelect';
import theme from './paperTheme';
import { PaperProvider } from 'react-native-paper';
import AddSeller from './components/AddSeller';
import ClientSelect from './screens/ClientSelect';
import AddClient from './components/AddClient';
import Products from './screens/Products';
import AddProduct from './components/AddProduct';
import AddService from './components/AddService';
import Coupon from './screens/Coupon';
import AddCoupon from './screens/AddCoupon';
import EditCoupon from './screens/EditCoupon';
import EditCoupom from './screens/EditCoupon';
import Feels from './screens/Feels';
import AddFeels from './screens/AddFeels';
import EditClient from './screens/EditClient'

const customTheme = {
  ...theme,
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
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
            <Stack.Screen
              name="SellerSelect"
              component={SellerSelect}
            />
            <Stack.Screen
              name="AddSeller"
              component={AddSeller}
            />
            <Stack.Screen
              name="ClientSelect"
              component={ClientSelect}
            />
            <Stack.Screen
              name="AddClient"
              component={AddClient}
            />
            <Stack.Screen
              name="Products"
              component={Products}
            />
            <Stack.Screen
              name="AddProduct"
              component={AddProduct}
            />
            <Stack.Screen
              name="AddService"
              component={AddService}
            />
            <Stack.Screen
              name="Coupon"
              component={Coupon}
            />
            <Stack.Screen
              name="AddCoupon"
              component={AddCoupon}
            />
              <Stack.Screen
              name="EditCoupon"
              component={EditCoupon}
            />
             <Stack.Screen
              name="Feels"
              component={Feels}
            />
            <Stack.Screen
              name="AddFeels"
              component={AddFeels}
            />
            <Stack.Screen
              name="EditClient"
              component={EditClient}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
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
