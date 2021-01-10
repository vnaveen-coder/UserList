import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserData from './screens/userData';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="Home"
          component={UserData}
          options={{title: 'User List'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
