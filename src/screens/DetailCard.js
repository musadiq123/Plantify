import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailCard({route}) {
    const { item } = route.params;
    console.log("itemId", item)
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'flex-start',
            flexDirection:'row',
            height: 190,
            // borderWidth:0.3,
            borderRadius: 20,
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
            backgroundColor: '#B2E28D',
          }}><View
          style={{
            justifyContent: 'flex-start',
            flexDirection:'row',
            height: 190,
            // borderWidth:0.3,
            borderRadius: 20,
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
            backgroundColor: '#B2E28D',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
              margin:10,
            }}>
            {item?.category}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
              margin:10,
              fontSize:30
            }}>
            {item?.name}
          </Text>
          </View>
          <View>
            <View style={{margin:20, borderRadius:20}}><Text></Text></View>
          </View>
        </View>
      </SafeAreaView>
    );
}