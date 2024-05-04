import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondPage from './pages/second';
import cardDetail from './companents/cardDetail';
import CategoriesPage from './pages/CategoriesPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories" screenOptions={{headerShown:true}} >
      <Stack.Screen name="Categories" component={CategoriesPage}  options={{
          title: 'Kategoriler',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',  
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="second" component={SecondPage}  options={{
          title: 'Ürünler',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',  
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="CardDetail" component={cardDetail}   options={{
          title: 'Ürün Detayları',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',  
          },
          headerTintColor: '#fff',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;