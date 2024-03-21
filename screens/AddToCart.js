import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import themeContext from '../config/ThemeContext';

const checkedImagePath = require('../assets/images/checked.png');
const uncheckedImagePath = require('../assets/images/unChecked.png');
const squareImagePath = require('../assets/images/plus-button.png');
const minusButtonImagePath = require('../assets/images/minus-button.png');

const AddToCart = () => {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const route = useRoute();
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [mainImageUri, setMainImageUri] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchCartItems();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (route.params && route.params.imageUri) {
      setMainImageUri(route.params.imageUri);
    }
  }, [route.params]);


  const fetchCartItems = async () => {
    try {
      const storedItems = await AsyncStorage.getItem('shoesDetails');
      if (storedItems) {
        const parsedItems = JSON.parse(storedItems);
        let updatedItems = [];
        parsedItems.forEach(item => {
          const existingItemIndex = updatedItems.findIndex(i => i.name === item.name && i.price === item.price);
          if (existingItemIndex !== -1) {
            updatedItems[existingItemIndex].quantity++;
          } else {
            updatedItems.push({ ...item, quantity: 1 });
          }
        });
        setCartItems(updatedItems);
        setSelectAll(false);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleCheckOut = () => {
    let selectedItemsDetails;
    let itemsToConsider = [];

    if (selectedItems.length > 0) {
      // If items are selected, consider only those items
      itemsToConsider = selectedItems.map((index) => cartItems[index]);
    } else {
      // If no items are selected, consider all items in the cart
      itemsToConsider = cartItems;
    }

    const totalPrice = itemsToConsider.reduce((total, item) => total + item.price * item.quantity, 0);

    selectedItemsDetails = {
      items: itemsToConsider.map((item) => ({
        ...item,
        size: item.size,
      })),
      totalPrice: totalPrice,
    };

    navigation.navigate('Confirm', { selectedItemsDetails });
  };




  const handleDeleteItem = async () => {
    try {
      const updatedCartItems = cartItems.filter((item, index) => !selectedItems.includes(index));
      const updatedSelectedItems = selectedItems.filter(index => index < updatedCartItems.length);
      await AsyncStorage.setItem('shoesDetails', JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
      setSelectedItems(updatedSelectedItems);
      setSelectAll(false);
    } catch (error) {
      console.error('Error deleting item from cart:', error);
    }
  };

  const handleCheckboxToggle = (index) => {
    const updatedSelectedItems = [...selectedItems];
    if (updatedSelectedItems.includes(index)) {
      updatedSelectedItems.splice(updatedSelectedItems.indexOf(index), 1);
    } else {
      updatedSelectedItems.push(index);
    }
    setSelectedItems(updatedSelectedItems);
    setSelectAll(updatedSelectedItems.length === cartItems.length);
  };

  const handleSelectAllToggle = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      const allIndices = Array.from(Array(cartItems.length).keys());
      setSelectedItems(allIndices);
    }
    setSelectAll(!selectAll);
  };

  const handleQuantityChange = (index, action) => {
    const updatedCartItems = [...cartItems];
    const currentItem = updatedCartItems[index];

    if (action === '+') {
      // Increase quantity up to 10
      currentItem.quantity = currentItem.quantity < 10 ? currentItem.quantity + 1 : 10;
    } else if (action === '-') {
      // Decrease quantity down to 1
      currentItem.quantity = currentItem.quantity > 1 ? currentItem.quantity - 1 : 1;
    }

    setCartItems(updatedCartItems);
  };

  const shoeImages = {
    'Nike Air Jordan': require('../assets/images/shoes1.jpg'),
    'Jordan': require('../assets/images/shoes2.jpg'),
    'Nike 1': require('../assets/images/shoes3.jpg'),
    'Air Jordan': require('../assets/images/shoes4.jpg'),
    'Air Jordan New Auddition': require('../assets/images/shoes5.jpg'),
    'New Auddition': require('../assets/images/shoes6.jpg'),
    'Jordan Auddition': require('../assets/images/shoes7.jpg'),
    'New Shoes Auddition': require('../assets/images/shoes8.jpg'),
    'Air Jordan Auddition': require('../assets/images/shoes9.jpg'),
    'Air Jordan Nike': require('../assets/images/shoes10.jpg'),
  };
  const renderItem = ({ item,index }) => {
    const isSelected = selectedItems.includes(index);

    if (index < cartItems.length) {
      return (
        <View style={[styles.item, { borderColor: theme.color }, { backgroundColor: theme.background }]}>
          <TouchableOpacity onPress={() => handleCheckboxToggle(index)}>
            <Image
              source={isSelected ? checkedImagePath : uncheckedImagePath}
              style={styles.checkboxImage}
            />
          </TouchableOpacity>
          <View style={styles.itemDetailsContainer}>
            <Image
              source={shoeImages[item.name]}
              style={styles.itemImage}
            />
            <View style={styles.itemDetails}>
              <Text style={[styles.itemName, { color: theme.color }]}>{item.name}</Text>
              <Text style={[styles.itemPrice, { color: theme.color }]}>{item.price}</Text>
            </View>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => handleQuantityChange(index, '+')}>
              <Image source={squareImagePath} style={styles.quantityImage} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => handleQuantityChange(index, '-')}>
              <Image source={minusButtonImagePath} style={styles.quantityImage} />
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return null;
    }
  };


  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      {cartItems.length === 0 ? (
        <Text style={[styles.addProductsText, { color: theme.color }]}>Add Products</Text>
      ) : (
        <>
          {cartItems.length > 0 && (
            <View style={styles.checkboxContainer}>
              <TouchableOpacity onPress={handleSelectAllToggle}>
                <Image
                  source={selectAll ? checkedImagePath : uncheckedImagePath}
                  style={styles.checkboxImageSelect}
                />
              </TouchableOpacity>
              <Text style={[styles.checkboxText, { color: theme.color }]}>Select All</Text>
            </View>
          )}
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <Text style={[styles.selectedItemsText, { color: theme.color }]}>
            Selected Items ( {selectedItems.length} )</Text>
          <View style={styles.buttonContainer}>
            {selectedItems.length > 0 ? (
              <TouchableOpacity
                onPress={handleDeleteItem}
                style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity
              style={styles.checkOutButton}
              onPress={() => handleCheckOut()}
            >
              <Text style={styles.deleteButtonText}>Check Out</Text>
            </TouchableOpacity>


          </View>
        </>
      )}

    </View>
  );
};
// AddToCart.propTypes = {
//   style: propTypes.style, 
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectedItemsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    left: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  itemImage: {
    width: 50, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    marginRight: 10,
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
  itemDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 10,
    elevation: 2,
    borderWidth: 1,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 16,
    alignItems: 'center',
    width: '40%',
  },
  checkOutButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 16,
    alignItems: 'center',
    width: '40%',
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 16,
  },
  checkboxImage: {
    width: 20,
    height: 20,
    marginRight: 20,
    marginTop: 10,
  },
  checkboxText: {
    fontSize: 16,
    marginTop: 10,
    left: 23,
  },
  checkboxImageSelect: {
    width: 20,
    height: 20,
    left: 18,
    marginTop: 10,
  },
  addProductsText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '100%',
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 10,
  },
});

export default AddToCart;
