import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  Button,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import ListView from './src/screens/ListView';
import Main from './src/screens/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailCard from './src/screens/DetailCard';

const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Main"
//           component={Main}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen name="ListView" component={ListView} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen
           name="Main"
           component={Main}
           options={{headerShown: false}}
         />
         <Stack.Screen name="DetailCard" component={DetailCard} />
       </Stack.Navigator>
     </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    fontSize: 16,
  },
  txtNameStykes: {
    justifyContent: 'space-around',
  },
  txtEmailStykes: {
    color: '#777',
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
});
