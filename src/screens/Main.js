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
import {Header} from '../components/header';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Fonts} from '../styles';
import Group66 from '../assets/images/svg/Group66';
import Group153 from '../assets/images/svg/Group153';
import Group46 from '../assets/images/svg/Group46';
import Group60 from '../assets/images/svg/Group60';
import EmptyHeart from '../assets/images/svg/EmtyHeart';

function Main({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  const [data, setData] = useState([]);

  const getColor = data => {
    console.log('data', data.id);
    switch (data.id) {
      case 1:
        return '#9CE5CB';
        break;
      case 2:
        // code block
        return '#FFE899';
      case 3:
        // code block
        return '#56D1A7';
      case 4:
        // code block
        return '#B2E28D';
      case 5:
        // code block
        return '#DEEC8A';
      case 6:
        // code block
        return '#F5EDA8';
      default:
        // code block
        return '#B2E28D';
    }
  };

  useEffect(() => {
    axios
      .get(`https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q`)
      .then(res => {
        console.log('res', res);
        // setUsers([...user, ...res?.data?.results]);
        setData(res?.data);
      });
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.cardContainer,
          {flexDirection: 'row', padding: 10, backgroundColor: getColor(item)},
        ]}
        onPress={() => {
          navigation.navigate('DetailCard', {item: item});
        }}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={{fontSize: 15, fontFamily: Fonts.BOLDITALIC}}>
            {item?.category}
          </Text>
          <Text style={[styles.textheaderStyle, {fontSize: 22}]}>
            {item?.name}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{fontSize: 19, fontWeight: '700', alignSelf: 'center'}}>
              {'$ ' + item?.price}
            </Text>
            <View style={{flex: 1, alignSelf: 'center', marginLeft: 20}}>
              <EmptyHeart />
            </View>
            <View style={{flex: 1, alignSelf: 'center'}}>
              <Group60 />
            </View>

            {/* <Text style={{fontSize:15}}>{item?.bio}</Text> */}
          </View>
        </View>
        <View style={{flex: 0.5}}>
          <Group66 />
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
      {/* <Header/> */}

      <View
        style={{width: '100%', justifyContent: 'center', alignSelf: 'center'}}>
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
    marginRight: 80,
    // borderWidth:0.3,
    margin: 20,
    borderRadius: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textheaderStyle: {
    color: '#002140',
    fontWeight: 700,
    fontFamily: Fonts.BOLDITALIC,
  },
});

export default Main;
