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
  import axios from 'axios';
  
  const ITEM_HEIGHT = 80;
  
  const ListView=() =>{
    const [user, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    // const count = [...Array(10000)].map((_, i) => i + 1);
  
    const ref = useRef(null);
  
    useEffect(() => {
      getUsers();
    //   console.log('count', count);
    }, [currentPage]);
  
    const renderItem = ({item}) => {
      return (
        <View style={[styles?.itemWrapperStyle, {height: ITEM_HEIGHT}]}>
          <Image style={styles?.image} source={{uri: item?.picture?.large}} />
          <View style={styles?.contentWrapperStyle}>
            <Text
              style={
                styles?.txtNameStykes
              }>{`${item?.name?.title} ${item?.name?.first} ${item?.name?.last}`}</Text>
            <Text style={styles?.txtEmailStykes}>{`${item?.email}`}</Text>
          </View>
        </View>
      );
    };
  
    const renderLoader = () => {
      return isLoading ? (
        <View style={styles?.loaderStyle}>
          <ActivityIndicator size={'large'} color={'#aaa'} />
        </View>
      ) : null;
    };
  
    const loadMoreItem = () => {
      console.log('load more');
      setCurrentPage(currentPage + 1);
    };
  
    const getUsers = () => {
      setLoading(true);
      axios
        .get(
          `https://randomuser.me/api/?page=${currentPage}&results=10&seed=abc`,
        )
        .then(res => {
          console.log('res', res);
          setUsers([...user, ...res?.data?.results]);
        //   setUsers(res?.data?.results);
  
          setLoading(false);
        });
    };
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <Button
          title="Up"
          onPress={() => {
            ref?.current?.scrollToIndex({
              index: 0,
            });
          }}
        />
        <Button
          title="to Half"
          onPress={() => {
            ref?.current?.scrollToIndex({
              index: user.length / 2,
            });
          }}
        />
        <Button
          title="Down"
          onPress={() => {
            ref?.current?.scrollToEnd();
          }}
        />
        </View>
        
        <FlatList
        ref={ref}
          data={user}
          initialNumToRender={100}
          maxToRenderPerBatch={100}
          renderItem={renderItem}
          keyExtractor={item => item?.email && item?.login?.uuid}
          getItemLayout={(data, index) => {
            return {index, length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index};
          }}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
        />
      </SafeAreaView>
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
  
  export default ListView 