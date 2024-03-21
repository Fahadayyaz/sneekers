import { View, Text, Button, ImageBackground, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import themeContext from '../config/ThemeContext';
import { useContext, useState } from 'react';
import { SliderBox } from 'react-native-image-slider-box';

export default function Home() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isHeartClicked, setHeartClicked] = useState(false);
  const [isSHeartClicked, setSHeartClicked] = useState(false);
  const [isTHeartClicked, setTHeartClicked] = useState(false);
  const [isFHeartClicked, setFHeartClicked] = useState(false);
  const [isFiveHeartClicked, setFiveHeartClicked] = useState(false);
  const [isSixHeartClicked, setSixHeartClicked] = useState(false);
  const [isSevenHeartClicked, setSevenHeartClicked] = useState(false);
  const [isEightHeartClicked, setEightHeartClicked] = useState(false);
  const [isNineHeartClicked, setNineHeartClicked] = useState(false);
  const [isTenHeartClicked, setTenHeartClicked] = useState(false);

  
  
  const handleHeartClick = (imageSource) => {
    setHeartClicked(!isHeartClicked);
    setSelectedImage(imageSource);
  }
  const handleSHeartClick = (imageSource) => {
    setSHeartClicked(!isSHeartClicked);
    setSelectedImage(imageSource);
  };
  const handleTHeartClick = () => {
    setTHeartClicked(!isTHeartClicked);
  };
  const handleFHeartClick = () => {
    setFHeartClicked(!isFHeartClicked);
  };
  const handleFiveHeartClick = () => {
    setFiveHeartClicked(!isFiveHeartClicked);
  };
  const handleSixHeartClick = () => {
    setSixHeartClicked(!isSixHeartClicked);
  };
  const handleSevenHeartClick = () => {
    setSevenHeartClicked(!isSevenHeartClicked);
  };
  const handleEightHeartClick = () => {
    setEightHeartClicked(!isEightHeartClicked);
  };
  const handleNineHeartClick = () => {
    setNineHeartClicked(!isNineHeartClicked);
  };
  
  const handleTenHeartClick = () => {
    setTenHeartClicked(!isTenHeartClicked);
  };
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
      name: 'Air Jordan New Auddition',
      price: '$ 50',
    };
    navigation.navigate('Your Product Detail', { imageUri, shoesDetails });
  };
  const handleImagePress6 = () => {
    const imageUri = require('../assets/images/shoes6.jpg');
    const shoesDetails = {
      name: 'New Auddition',
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
      name: 'New Shoes Auddition',
      price: '$ 80',
    };
    navigation.navigate('Your Product Detail', { imageUri, shoesDetails });
  };
  const handleImagePress9 = () => {
    const imageUri = require('../assets/images/shoes9.jpg');
    const shoesDetails = {
      name: 'Air Jordan Auddition',
      price: '$ 90',
    };
    navigation.navigate('Your Product Detail', { imageUri, shoesDetails });
  };
  const handleImagePress10 = () => {
    const imageUri = require('../assets/images/shoes10.jpg');
    const shoesDetails = {
      name: 'Air Jordan Nike',
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
  const handleImageSlider = (index) => {
    console.log('Image pressed:', index);
  };
  return (
    <ScrollView style={{ backgroundColor: theme.background }}>
      <View>
        <View style={styles.sliderContainer}>
          <SliderBox
            images={images}
            dotColor="grey"
            inactiveDotColor="white"
            dotStyle={{
              height: 10,
              width: 10,
              borderRadius: 50,
            }}
            imageLoadingColor="black"
            autoplay={true}
            autoplayInterval={5000}
            circleLoop={true}
            firstItem={1} />
        </View>
        <View style={styles.brandContainer}>
          <Text style={[{ fontSize: 15, fontWeight: 'bold', color: 'black', left: 5 }, { color: theme.color }]}>
            All Brands
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('All Brands Category')}>
            <Text style={[{ fontSize: 13, fontStyle: 'italic', color: 'green' }, { color: theme.color }]}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.containerS}>
            <View style={styles.circularElement}>
              <TouchableOpacity onPress={() => navigation.navigate('Famous Shoes Screen')}>
                <Image source={require('../assets/images/nike.png')} style={{ height: 50, width: 50 }} />
              </TouchableOpacity>
            </View>
            <View style={styles.circularElement}>
              <TouchableOpacity onPress={() => navigation.navigate('Famous Shoes Screen')}>
                <Image source={require('../assets/images/adidas.png')} style={{ height: 50, width: 50 }} />
              </TouchableOpacity>
            </View>
            <View style={[styles.circularElement]}>
              <TouchableOpacity onPress={() => navigation.navigate('Famous Shoes Screen')}>
                <Image source={require('../assets/images/puma.png')} style={[{ height: 50, width: 50 }]} />
              </TouchableOpacity>
            </View>
            <View style={[styles.circularElement]}>
              <TouchableOpacity onPress={() => navigation.navigate('Famous Shoes Screen')}>
                <Image source={require('../assets/images/Salomon.png')} style={[{ height: 50, width: 50 }]} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={styles.brandContainer}>
          <Text style={[{ fontSize: 15, fontWeight: 'bold', color: 'black', left: 5 }, { color: theme.color }]}>
            Tranding Shoes
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Famous Shoes Screen')}>
            <Text style={[{ fontSize: 13, fontStyle: 'italic', color: 'green' }, { color: theme.color }]}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View>
            <ScrollView horizontal>
              <View style={[styles.category, { backgroundColor: theme.background }]}>
                <TouchableOpacity onPress={handleImagePress}>
                  <ImageBackground source={require('../assets/images/shoes1.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleHeartClick(images[0])} style={styles.heartIconContainer}>
                  <Image source={isHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')} style={styles.heartIcon} />
                </TouchableOpacity>
                <Text style={[styles.ShoesName, { color: theme.color }]}>Nike Air Jordan</Text>
                <Text style={[styles.ShoesPrice, { color: theme.color }]}>$ 10</Text>
              </View>
              <View style={[styles.category, { backgroundColor: theme.background }]}>
                <TouchableOpacity onPress={handleImagePress2}>
                  <ImageBackground source={require('../assets/images/shoes2.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSHeartClick(images[0])}
                  style={styles.heartIconContainer}>
                  <Image source={isSHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')} 
                     style={styles.heartIcon} />
                </TouchableOpacity>
                <Text style={[styles.ShoesName, { color: theme.color }]}>Jordan</Text>
                <Text style={[styles.ShoesPrice, , { color: theme.color }]}>$ 20</Text>
              </View>
            </ScrollView>
            <ScrollView horizontal={true}>
              <View style={[styles.category, { backgroundColor: theme.background }]}>
                <TouchableOpacity onPress={handleImagePress3}>
                  <ImageBackground source={require('../assets/images/shoes3.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTHeartClick(images[0])}
                  style={styles.heartIconContainer}>
                  <Image source={isTHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} />
                </TouchableOpacity>
                <Text style={[styles.ShoesName, { color: theme.color }]}>Nike 1</Text>
                <Text style={[styles.ShoesPrice, { color: theme.color }]}>$ 30</Text>
              </View>
              <View style={[styles.category, { backgroundColor: theme.background }]}>
                <TouchableOpacity onPress={handleImagePress4}>
                  <ImageBackground source={require('../assets/images/shoes4.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleFHeartClick(images[0])}
                  style={styles.heartIconContainer}>
                  <Image source={isFHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} />
                </TouchableOpacity>
                <Text style={[styles.ShoesName, { color: theme.color }]}>Air Jordan</Text>
                <Text style={[styles.ShoesPrice, { color: theme.color }]}>$ 40</Text>
              </View>
            </ScrollView>
            <ScrollView horizontal>
              <View style={[styles.category, { backgroundColor: theme.background }]}>
                <TouchableOpacity onPress={handleImagePress5}>
                  <ImageBackground source={require('../assets/images/shoes5.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleFiveHeartClick(images[0])}
                  style={styles.heartIconContainer}>
                  <Image source={isFiveHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} />
                </TouchableOpacity>
                <Text style={[styles.ShoesName, { color: theme.color }]}>Air Jordan New Auddition</Text>
                <Text style={[styles.ShoesPrice, { color: theme.color }]}>$ 50</Text>
              </View>
              <View style={[styles.category, { backgroundColor: theme.background }]}>
                <TouchableOpacity onPress={handleImagePress6}>
                  <ImageBackground source={require('../assets/images/shoes6.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                  </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleSixHeartClick(images[0])}
                  style={styles.heartIconContainer}>
                  <Image source={isSixHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} />
                </TouchableOpacity>

                <Text style={[styles.ShoesName, { color: theme.color }]}>New Auddition</Text>
                <Text style={[styles.ShoesPrice, { color: theme.color }]}>$ 60</Text>
              </View>
            </ScrollView>
            <ScrollView horizontal>
              <View style={[styles.category, { backgroundColor: theme.background }]}>
                <TouchableOpacity onPress={handleImagePress7}>
                  <ImageBackground source={require('../assets/images/shoes7.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSevenHeartClick(images[0])}
                  style={styles.heartIconContainer}>
                  <Image source={isSevenHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} />
                </TouchableOpacity>
                <Text style={[styles.ShoesName, { color: theme.color }]}>Jordan Auddition</Text>
                <Text style={[styles.ShoesPrice, { color: theme.color }]}>$ 70</Text>
              </View>
              <View style={[styles.category, { backgroundColor: theme.background }]}>
                <TouchableOpacity onPress={handleImagePress8}>
                  <ImageBackground source={require('../assets/images/shoes8.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleEightHeartClick(images[0])}
                  style={styles.heartIconContainer}>
                  <Image source={isEightHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} />
                </TouchableOpacity>
                <Text style={[styles.ShoesName, { color: theme.color }]}>New Shoes Auddition</Text>
                <Text style={[styles.ShoesPrice, { color: theme.color }]}>$ 80</Text>
              </View>
            </ScrollView>
            <ScrollView horizontal>
              <View style={[styles.category, { backgroundColor: theme.background }]}>
                <TouchableOpacity onPress={handleImagePress9}>
                  <ImageBackground source={require('../assets/images/shoes9.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNineHeartClick(images[0])}
                  style={styles.heartIconContainer}>
                  <Image source={isNineHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} />
                </TouchableOpacity>
                <Text style={[styles.ShoesName, { color: theme.color }]}>Air Jordan New Auddition</Text>
                <Text style={[styles.ShoesPrice, { color: theme.color }]}>$ 90</Text>
              </View>
              <View style={[styles.category, { backgroundColor: theme.background }]}>
                <TouchableOpacity onPress={handleImagePress10}>
                  <ImageBackground source={require('../assets/images/shoes10.jpg')} style={styles.imageBackground} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTenHeartClick(images[0])}
                  style={styles.heartIconContainer}>
                  <Image source={isTenHeartClicked ? require('../assets/images/red_heart_icon.png') : require('../assets/images/heart_icon.png')}
                    style={styles.heartIcon} />
                </TouchableOpacity>
                <Text style={[styles.ShoesName, { color: theme.color }]}>Air Jordan Nike</Text>
                <Text style={[styles.ShoesPrice, { color: theme.color }]}>$ 110</Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  notification: {
    width: 20,
    height: 20,
    margin: 15,
    justifyContent: 'space-between'
  }, container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 99,
    alignSelf: 'center',
    marginTop: 5,
    paddingHorizontal: 15,
    shadowColor: 'black',
  }, textInput: {
    flex: 1,
    marginLeft: 10,
    color: 'black',
  }, icon: {
    height: 25,
    width: 25,
    tintColor: 'lightgrey',
  }, sliderContainer: {
    borderRadius: 30,
    elevation: 3,
    overflow: 'hidden',
    marginTop: 20,
    margin: 10,
  }, brandContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
  }, scrollView: {
    marginHorizontal: 10,
    alignSelf: 'center',
  }, containerS: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center'
  }, circularElement: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: 'black',
    marginHorizontal: 5,
    marginBottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
  }, category: {
    width: 160,
    height: 240,
    backgroundColor: '#F5F5F5',
    margin: 10,
    elevation: 5,
    shadowColor: 'black',
    borderRadius: 10,
    alignContent: 'center',
    flexDirection: 'row ',
  }, imageBackground: {
    width: '100%',
    height: 175,
    alignSelf: 'center',
  }, heartIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  }, heartIcon: {
    width: 30,
    height: 30,
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
});