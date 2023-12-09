/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function Main({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{justifyContent: 'center', alignSelf: 'center'}}>
        <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 20}}>
          Main Page{' '}
        </Text>
        {/* <TouchableOpacity
          style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigation.navigate('ListView')}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'red',
              fontSize: 20,
              alignSelf: 'center',
            }}>
            Click here to Listview Page
          </Text>
        </TouchableOpacity> */}
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Main;
