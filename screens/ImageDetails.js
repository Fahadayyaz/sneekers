import React, { useState, useEffect, useContext } from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity, Text, ToastAndroid, Modal } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import themeContext from '../config/ThemeContext';

const ImageDetailsScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const { imageUri, shoesDetails } = route.params || {};
  const [selectedItem, setSelectedItem] = useState(null);
  const sizes = ['Small', 'Extra Small', 'Large', 'Extra Large'];
  const theme = useContext(themeContext);
  const [count, setCount] = useState(1);
  const squareImagePath = require('../assets/images/plus-button.png');
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(shoesDetails?.price);


  const incrementCount = () => {
    if (count < 10) {
      // Ensure a valid numeric totalPrice, handle potential undefined values
      const totalPriceAsNumber = typeof totalPrice === 'number'
        ? totalPrice
        : parseFloat(shoesDetails?.price?.replace(/[^0-9.]/g, '') || 0);
  
      // Calculate updated price with robust logic and error handling
      const updatedTotalPrice = count === 1
        ? parseFloat(shoesDetails.price?.slice(1) || 0) // Handle potential missing price information
        : totalPriceAsNumber + parseFloat(shoesDetails.price?.slice(1) || 0);
  
      // Check for valid updatedTotalPrice before setting state
      if (!isNaN(updatedTotalPrice)) {
        setTotalPrice(updatedTotalPrice.toFixed(1));
      } else {
        console.error('Invalid price calculation in incrementCount. UpdatedTotalPrice is NaN.');
      }
  
      setCount(count + 1);
    }
  };
  
  
  
  

  const decrementCount = () => {
    if (count > 1) {
      const updatedCount = count - 1;
      setCount(updatedCount);
      const updatedPrice = updatedCount === 1 ? parseFloat(shoesDetails.price.slice(1)) : totalPrice - parseFloat(shoesDetails.price.slice(1));
      setTotalPrice(updatedPrice.toFixed(2));
    }
  };

  const images = [
    require('../assets/images/shoes1.jpg'),
    require('../assets/images/shoes2.jpg'),
    require('../assets/images/shoes3.jpg'),
    require('../assets/images/shoes4.jpg'),
    require('../assets/images/shoes5.jpg'),
    require('../assets/images/shoes6.jpg'),
    require('../assets/images/shoes7.jpg'),
    require('../assets/images/shoes8.jpg'),
    require('../assets/images/shoes9.jpg'),
    require('../assets/images/shoes10.jpg'),
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    incrementCount();
  };

  const handleBuyNow = () => {
    const totalPrice = (parseFloat(shoesDetails.price.slice(1)) * count).toFixed(2);
    setTotalPrice(totalPrice);
    setIsModalVisible(true);
  
  };
  useEffect(() => {
    navigation.setParams({ imageUri: imageUri });
  }, [imageUri, navigation]);

  const handleImagePress = (index) => {
    const selectedShoesDetails = {
      name: 'Nike Air Jordan',
      price: '$89.83',
    };
    navigation.setParams({
      imageUri: images[index],
      shoesDetails: selectedShoesDetails,
    });
  };

  const addToCart = async (shoesDetails, selectedSize) => {
    try {
      const existingItems = await AsyncStorage.getItem('shoesDetails');
      let updatedArray = [];
      if (existingItems) {
        updatedArray = JSON.parse(existingItems);
      }
      shoesDetails.size = sizes[selectedSize];
      updatedArray.push(shoesDetails);
      await AsyncStorage.setItem('shoesDetails', JSON.stringify(updatedArray));
      console.log('Updated cart items:', updatedArray);
      ToastAndroid.show(
        'Item Added Successfully to Add to cart',
        ToastAndroid.SHORT
      );
      navigation.navigate('Home', { imageUri: imageUri });
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const handlePress = (index) => {
    setSelectedItem(index);
  };

  const isBuyNowDisabled = selectedItem === null;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={imageUri} style={styles.imageStyle} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.imageScrollView, { backgroundColor: theme.background }]}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleImagePress(index)}>
            <Image
              source={image}
              style={[
                styles.image,
                {
                  borderColor: imageUri === images[index] ? 'red' : 'white',
                },
              ]}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={[styles.detailsContainer, { backgroundColor: theme.background }]}>
        <Text style={[styles.name, { color: theme.color }]}>{shoesDetails?.name}</Text>
        <Text style={[styles.price, { color: theme.color }]}>{shoesDetails?.price}</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sizeScrollView}>
        {sizes.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.sizeTouchableOpacity,
              {
                backgroundColor: selectedItem === index ? 'green' : 'white',
              },
            ]}
            onPress={() => handlePress(index)}
          >
            <Text style={[styles.sizeText, { color: selectedItem === index ? 'white' : 'black' }]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.buyNowTouchableOpacitySecond,
            { backgroundColor: isBuyNowDisabled ? 'gray' : 'green' },
          ]}
          disabled={isBuyNowDisabled}
          onPress={handleBuyNow}
        >
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ScrollView horizontal>
                <View style={{ marginRight: 150 }}>
                  <Text>{shoesDetails?.name} </Text>
                  <Text>{shoesDetails?.price}</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                  <TouchableOpacity onPress={incrementCount}>
                    <Image source={require('../assets/images/plus-button.png')} style={{ width: 25, height: 25 }} />
                  </TouchableOpacity>

                  <Text style={{ marginLeft: 5, marginTop: 5 }}>{count}</Text>
                  <TouchableOpacity onPress={decrementCount}>
                    <Image source={require('../assets/images/minus-button.png')} style={{ width: 30, height: 30, marginLeft: 5, }} />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignSelf:'center'}}>
            <TouchableOpacity style={{ width: 100, height: 40, backgroundColor: 'green', margin: 5, borderRadius: 15, justifyContent: 'center', }} >
              <Text style={{ color: 'white', textAlign: 'center' }} onPress={()=>navigation.navigate('Your Address Book')}>Buy now</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal} style={{ width: 100, height: 40, backgroundColor: 'red', margin: 5, borderRadius: 15, justifyContent: 'center', }}>
              <Text style={{ color: 'white', textAlign: 'center' }} >Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(shoesDetails, selectedItem)}>
          <Text style={[styles.addToCartText, { color: theme.color }]}>Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: '100%',
    height: '38%',
    marginBottom: 10,
  },
  imageScrollView: {
    marginBottom: 10,
  },
  buyNowTouchableOpacitySecond: {
    padding: 10,
    borderRadius: 5,
  },
  buyNowText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
    alignItems: 'center',
    height: '100%',
    marginTop: '300%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30

  },
  modalButton: {
    backgroundColor: 'green',
    padding: 10,
    width: 100,
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    height: 130,
    width: 100,
    borderRadius: 10,
    borderWidth: 2,
    marginLeft: 5,
    marginRight: 5,
  },
  detailsContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
  name: {
    fontSize: 20,
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: 10
  },
  price: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginLeft: 10
  },
  sizeScrollView: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  sizeTouchableOpacity: {
    backgroundColor: 'white',
    height: 40,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 5,
    elevation: 3,
    marginBottom: 3,
  },
  quantityImage: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  sizeText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 3,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  buyNowTouchableOpacitySecond: {
    backgroundColor: 'green',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '45%',
    marginBottom: 4,
    margin: 5,
  },
  addToCartButton: {
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '45%',
    marginBottom: 4,
    margin: 5,
    borderColor: 'green',
  },
  buyNowText: {
    color: '#fff',
    fontSize: 16,
  },
  addToCartText: {
    color: 'black',
    fontSize: 16,
  },
});

export default ImageDetailsScreen;
