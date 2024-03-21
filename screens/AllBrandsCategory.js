import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const AllBrandsCategory = () => {
  const navigation = useNavigation();
  return (

    <View style={styles.containerS}>

      <View style={styles.circularElement}>
      <TouchableOpacity onPress={()=>navigation.navigate('Famous Shoes Screen')}>
          <Image source={require('../assets/images/adidas.png')} style={{ height: 50, width: 50, }} />
        </TouchableOpacity>
      </View>

      <View style={styles.circularElement}>
      <TouchableOpacity onPress={()=>navigation.navigate('Famous Shoes Screen')}>
          <Image source={require('../assets/images/Salomon.png')} style={{ height: 50, width: 50, }} />
        </TouchableOpacity>
      </View>
      <View style={styles.circularElement}>
      <TouchableOpacity onPress={()=>navigation.navigate('Famous Shoes Screen')}>
          <Image source={require('../assets/images/nike.png')} style={{ height: 50, width: 50, }} />
        </TouchableOpacity>
      </View>

      <View style={styles.circularElement} >
        <TouchableOpacity onPress={()=>navigation.navigate('Famous Shoes Screen')}>
          <Image source={require('../assets/images/puma.png')} style={{ height: 50, width: 50, }} />
        </TouchableOpacity>
      </View>

    </View>
  )
}
// AllBrandsCategory.propTypes = {
//   style: propTypes.style, 
// };
const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 10,
    alignSelf: 'center',
    marginTop: 10
  },
  containerS: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin:10

  },
  circularElement: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: 'black',
    marginHorizontal: 5,
    marginBottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
    right: 10,
    margin: 10,
  },
})

export default AllBrandsCategory