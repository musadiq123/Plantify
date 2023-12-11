import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import SvgUri from 'react-native-svg-uri';
import { Fonts } from '../styles';
import testSvg from '../assets/images/svg/Frame97.js';          // SVG File
import SvgListComponent from './SvgListComponent';
import Group46 from '../assets/images/svg/Group46';
import Group47 from '../assets/images/svg/Group47';
import Group49 from '../assets/images/svg/Group49';
import Group60 from '../assets/images/svg/Group60';
import Frame97 from '../assets/images/svg/Frame97.js';
import Group153 from '../assets/images/svg/Group153';



export default function Header({name}) {
  return (
    <View style={styles.header}>
      <View style={{justifyContent:'flex-start', flex:1, flexDirection:'row'}}>
      <Group46/>
      <Text style={[styles.headerText,{marginLeft:10}]}>{name}</Text>

      </View>
      <View style={{justifyContent:'space-evenly', flexDirection:'row', flex:1}}>
      <Group153 />
      <SvgListComponent/>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: 'bold',
    fontFamily: Fonts.ITALIC,
    fontWeight: 700,
    letterSpacing: 2,
    fontSize: 22,
    color: '#002140',
    letterSpacing: 1,
  },
});