/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
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
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q`)
      .then(res => {
        console.log('res', res);
        // setUsers([...user, ...res?.data?.results]);
        setData(res?.data);

        // setLoading(false);
      });
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[styles.cardContainer, {flexDirection: 'row', padding: 10}]}
        onPress={() => {
          navigation.navigate('DetailCard', {item: item});
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 15}}>{item?.category}</Text>
          <Text style={[styles.textheaderStyle, {fontSize: 22}]}>
            {item?.name}
          </Text>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 19, fontWeight: '700'}}>
              {'$ ' + item?.price}
            </Text>
            {/* <Text style={{fontSize:15}}>{item?.bio}</Text> */}
          </View>
        </View>
        <View style={{marginRight: '-20%'}}>
          <Image
            src={item?.image}
            style={{width: 100, height: 100}}
            resizeMode={'cover'}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{width: '100%', justifyContent: 'center', alignSelf: 'center'}}>
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

        <FlatList data={data} renderItem={renderItem} />
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
  cardContainer: {
    height: 150,
    // width: "80%",
    marginRight: 70,
    // borderWidth:0.3,
    margin: 20,
    borderRadius: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: '#B2E28D',
  },
  textheaderStyle: {
    color: '#002140',
    fontWeight: 700,
  },
});

export default Main;
