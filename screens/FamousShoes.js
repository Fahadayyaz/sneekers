import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';

const FamousShoes = ({ navigation }) => {
  const handleImagePress = () => {
    const imageUri = require('../assets/images/shoes1.jpg');
    const shoesDetails = {
      name: 'Nike Air Jordan',
      price: '$ 10',
    };
    navigation.navigate('Your Product Detail', { imageUri, shoesDetails });
  };

  const handleImagePress2 = () => {
    const imageUri = require('../assets/images/shoes2.jpg');
    const shoesDetails = {
      name: 'Jordan',
      price: '$ 20',
    };
    navigation.navigate('Your Product Detail', { imageUri, shoesDetails });
  };

  const handleImagePress3 = () => {
    const imageUri = require('../assets/images/shoes3.jpg');
    const shoesDetails = {
      name: 'Nike 1',
      price: '$ 30',
    };
    navigation.navigate('Your Product Detail', { imageUri, shoesDetails });
  };

  const handleImagePress4 = () => {
    const imageUri = require('../assets/images/shoes4.jpg');
    const shoesDetails = {
      name: 'Air Jordan',
      price: '$ 40',
    };
    navigation.navigate('Your Product Detail', { imageUri, shoesDetails });
  };

  const handleImagePress5 = () => {
    const imageUri = require('../assets/images/shoes5.jpg');
    const shoesDetails = {
      name: 'Air Jordan New Auddution',
      price: '$ 50',
    };
    navigation.navigate('Your Product Detail', { imageUri, shoesDetails });
  };
  const handleImagePress6 = () => {
    const imageUri = require('../assets/images/shoes6.jpg');
    const shoesDetails = {
      name: 'Nike New Auddition',
      price: '$ 60',
    };
    navigation.navigate('Your Product Detail', { imageUri, shoesDetails });
  };
  const handleImagePress7 = () => {
    const imageUri = require('../assets/images/shoes7.jpg');
    const shoesDetails = {
      name: 'Jordan Auddition',
      price: '$ 70',
    };
    navigation.navigate('Your Product Detail', { imageUri, shoesDetails });
  };
  const handleImagePress8 = () => {
    const imageUri = require('../assets/images/shoes8.jpg');
    const shoesDetails = {
      name: 'New Auddition',
      price: '$ 80',
    };
    navigation.navigate('Your Product Detail', { imageUri, shoesDetails });
  };
  const handleImagePress9 = () => {
    const imageUri = require('../assets/images/shoes9.jpg');
    const shoesDetails = {
      name: 'Air Jordan New Auddition',
      price: '$ 90',
    };
    navigation.navigate('Your Product Detail', { imageUri, shoesDetails });
  };
  const handleImagePress10 = () => {
    const imageUri = require('../assets/images/shoes10.jpg');
    const shoesDetails = {
      name: 'New Auddition',
      price: '$ 110',
    };
    navigation.navigate('Your Product Detail', { imageUri, shoesDetails });
  };


  const images = [
    require('../assets/images/s1.jpg'),
    require('../assets/images/s2.jpg'),
    require('../assets/images/s3.jpg'),
    require('../assets/images/s4.jpg'),
  ];

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View>
          <ScrollView horizontal={true}>
            <View style={styles.category}>
              <TouchableOpacity onPress={handleImagePress}>
                <ImageBackground source={require('../assets/images/shoes1.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleHeartClick(images[0])} style={styles.heartIconContainer}>
                {/* <Image source={isHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')} style={styles.heartIcon} /> */}
              </TouchableOpacity>
              <Text style={styles.ShoesName}>Nike Air Jordan</Text>
              <Text style={styles.ShoesPrice}>$ 10</Text>
            </View>
            <View style={styles.category}>
              <TouchableOpacity onPress={handleImagePress2}>
                <ImageBackground source={require('../assets/images/shoes2.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSHeartClick(images[0])}
                style={styles.heartIconContainer}>
                {/* <Image source={isSHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')} 
                     style={styles.heartIcon} /> */}
              </TouchableOpacity>
              <Text style={styles.ShoesName}>Jordan</Text>
              <Text style={styles.ShoesPrice}>$ 20</Text>
            </View>
          </ScrollView>
          <ScrollView horizontal={true}>
            <View style={styles.category}>
              <TouchableOpacity onPress={handleImagePress3}>
                <ImageBackground source={require('../assets/images/shoes3.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleTHeartClick(images[0])}
                style={styles.heartIconContainer}>
                {/* <Image source={isTHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} /> */}
              </TouchableOpacity>
              <Text style={styles.ShoesName}>Nike 1</Text>
              <Text style={styles.ShoesPrice}>$ 30</Text>
            </View>
            <View style={styles.category}>
              <TouchableOpacity onPress={handleImagePress4}>
                <ImageBackground source={require('../assets/images/shoes4.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleFHeartClick(images[0])}
                style={styles.heartIconContainer}>
                {/* <Image source={isFHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} /> */}
              </TouchableOpacity>
              <Text style={styles.ShoesName}>Air Jordan</Text>
              <Text style={styles.ShoesPrice}>$ 40</Text>
            </View>
          </ScrollView>
          <ScrollView horizontal>
            <View style={styles.category}>
              <TouchableOpacity onPress={handleImagePress5}>
                <ImageBackground source={require('../assets/images/shoes5.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleFHeartClick(images[0])}
                style={styles.heartIconContainer}>
                {/* <Image source={isFHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} /> */}
              </TouchableOpacity>
              <Text style={styles.ShoesName}>Air Jordan New Auddition</Text>
              <Text style={styles.ShoesPrice}>$ 50</Text>
            </View>
            <View style={styles.category}>
              <TouchableOpacity onPress={handleImagePress6}>
                <ImageBackground source={require('../assets/images/shoes6.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleFHeartClick(images[0])}
                style={styles.heartIconContainer}>
                {/* <Image source={isFHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} /> */}
              </TouchableOpacity>
              <Text style={styles.ShoesName}>Nike New Auddition</Text>
              <Text style={styles.ShoesPrice}>$ 60</Text>
            </View>
          </ScrollView>
          <ScrollView horizontal>
            <View style={styles.category}>
              <TouchableOpacity onPress={handleImagePress7}>
                <ImageBackground source={require('../assets/images/shoes7.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleFHeartClick(images[0])}
                style={styles.heartIconContainer}>
                {/* <Image source={isFHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} /> */}
              </TouchableOpacity>
              <Text style={styles.ShoesName}>Jordan Auddition</Text>
              <Text style={styles.ShoesPrice}>$ 70</Text>
            </View>
            <View style={styles.category}>
              <TouchableOpacity onPress={handleImagePress8}>
                <ImageBackground source={require('../assets/images/shoes8.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleFHeartClick(images[0])}
                style={styles.heartIconContainer}>
                {/* <Image source={isFHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} /> */}
              </TouchableOpacity>
              <Text style={styles.ShoesName}>New Auddition</Text>
              <Text style={styles.ShoesPrice}>$ 80</Text>
            </View>
          </ScrollView>
          <ScrollView horizontal>
            <View style={styles.category}>
              <TouchableOpacity onPress={handleImagePress9}>
                <ImageBackground source={require('../assets/images/shoes9.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleFHeartClick(images[0])}
                style={styles.heartIconContainer}>
                {/* <Image source={isFHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} /> */}
              </TouchableOpacity>
              <Text style={styles.ShoesName}>Air Jordan New Auddition</Text>
              <Text style={styles.ShoesPrice}>$ 90</Text>
            </View>
            <View style={styles.category}>
              <TouchableOpacity onPress={handleImagePress10}>
                <ImageBackground source={require('../assets/images/shoes10.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleFHeartClick(images[0])}
                style={styles.heartIconContainer}>
                {/* <Image source={isFHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} /> */}
              </TouchableOpacity>
              <Text style={styles.ShoesName}>New Auddition</Text>
              <Text style={styles.ShoesPrice}>$ 110</Text>
            </View>
          </ScrollView>

        </View>

      </ScrollView>

    </View>
  )
}
export default FamousShoes

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 160,
    borderRadius: 15,
    margin: 10,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  category: {
    width: 160,
    height: 240,
    backgroundColor: '#F5F5F5',
    margin: 10,
    elevation: 5,
    shadowColor: 'black',
    borderRadius: 10,
    alignContent: 'center',
    flexDirection: 'row ',
  }, heartIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  }, imageBackground: {
    width: '100%',
    height: 175,
    alignSelf: 'center',
  }, ShoesName: {
    left: 5,
    fontSize: 17,
    color: 'black',
    top: 5,
  }, ShoesPrice: {
    fontSize: 15,
    color: 'black',
    left: 5,
    top: 2,
  }
})