import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import themeContext from '../config/ThemeContext'
import React, { useContext, useState } from 'react'
import { ThemeProvider } from '../config/ThemeContext';


const FilterProducts = () => {
    const navigation = useNavigation();
    const [userInput, setUserInput] = useState("");
    const [showRemoveButton, setShowRemoveButton] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const theme = useContext(themeContext);

    const products = [
        {
            id: 1,
            name: 'Air Jordan 1 1985',
            image: require('../assets/images/shoes1.jpg'),
            price: 10
        },
        {
            id: 2,
            name: 'Nike Air Force 1',
            image: require('../assets/images/shoes2.jpg'),
            price: 20
        },
        {
            id: 3,
            name: 'Nike Dunk',
            image: require('../assets/images/shoes3.jpg'),
            price: 30
        },
        {
            id: 4,
            name: 'Nike Air Yeezy 1',
            image: require('../assets/images/shoes4.jpg'),
            price: 40
        },
        {
            id: 5,
            name: 'Nike Air Max 1',
            image: require('../assets/images/shoes5.jpg'),
            price: 50
        },
        {
            id: 6,
            name: ' Adidas Yeezy 350 V1',
            image: require('../assets/images/shoes6.jpg'),
            price: 60
        },
        {
            id: 7,
            name: 'Air Jordan III 1988',
            image: require('../assets/images/shoes7.jpg'),
            price: 70
        },
        {
            id: 8,
            name: 'Converse Chuck Taylor All Star',
            image: require('../assets/images/shoes8.jpg'),
            price: 80
        },
        {
            id: 9,
            name: 'Adidas Basketball Forum 1984',
            image: require('../assets/images/shoes9.jpg'),
            price: 90
        },
        {
            id: 10,
            name: 'Roshe',
            image: require('../assets/images/shoes10.jpg'),
            price: 100
        },
    ];
    const filterProducts = (text) => {
        const filtered = products.filter((item) =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredProducts(filtered);
    };
    const handleRemoveText = () => {
        setUserInput("");
        setShowRemoveButton(false);
        setFilteredProducts([]);
    };
    const handleSearch = (text) => {
        setUserInput(text);
        setShowRemoveButton(!!text);
        filterProducts(text);
    }
    const handleImagePress = (item) => {
        const imageUri = item.image;
        const shoesDetails = {
            name: item.name,
            price: `$ ${item.price}`,
        };
        navigation.navigate('Your Product Detail', { imageUri, shoesDetails });
    };

    const renderProductItem = ({ item, index }) => (
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            marginBottom: 10,
            marginRight: 10,
            marginLeft: 10,
            padding: 5,
            borderRadius: 8,
            elevation: 2,
            borderColor: theme.background,
            borderWidth: 2
        }} onPress={() => handleImagePress(item)}>
            {item.image && <Image source={item.image} style={styles.itemImage} />}
            <View style={[styles.itemDetails, { backgroundColor: theme.background }]}>
                <Text style={[styles.itemText, { color: theme.color }]}>{item.name}</Text>
                {item.price && <Text style={[styles.priceText, { color: theme.color }]}>{`$ ${item.price}`}</Text>}
            </View>
        </TouchableOpacity>
    );
    const searchIcnSource = theme.isNightMode
    //  require('../assets/Icon/search_white.png')
    require('../assets/images/search.png')

    return (
        <View style={[styles.container]}>
            <SafeAreaView style={{ backgroundColor: theme.background }}>
                <View style={{
                    flexDirection: 'row',
                    borderColor: theme.color,
                    borderWidth: 1,
                    paddingHorizontal: 5,
                    borderRadius: 10,
                    marginHorizontal: 16,
                    marginVertical: 10,
                    alignItems: 'center'
                }}>
                    <TextInput
                        placeholder='Search here'
                        placeholderTextColor={theme.color}
                        onChangeText={handleSearch}
                        value={userInput}
                        style={[{ flex: 1, color: theme.color }]}
                    />
                    {showRemoveButton && (
                        <TouchableOpacity onPress={handleRemoveText} style={styles.removeIconContainer}>
                            <Image source={require('../assets/images/remove.png')} style={styles.removeIcon} />
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity style={styles.searchIconContainer}>
                        <Image source={require('../assets/images/search_white.png')} style={{
                            width: 20,
                            height: 20,
                            tintColor: theme.color
                        }} />
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={filteredProducts.length > 0 ? filteredProducts : products}
                    renderItem={renderProductItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </SafeAreaView >
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white'
    },
    textInputContainer: {
        flexDirection: 'row',
        borderColor: 'black',
        
        paddingHorizontal: 5,
        borderRadius: 10,
        marginHorizontal: 16,
        marginVertical: 10,
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        padding: 5,
        borderRadius: 8,
        elevation: 2,
        borderColor: 'black',
        
    },
    itemText: {
        // color: 'black',
        marginLeft: 10,
        flex: 1,
        marginTop: 70,
    },
    itemImage: {
        width: 90,
        height: 110,
        borderRadius: 8,
    },
    itemDetails: {
        flex: 1,
        marginLeft: 10,
    },
    priceText: {
        color: 'green',
        left: 10,
    },
    removeIconContainer: {
        padding: 10,
    },
    searchIconContainer: {
        padding: 10,
        marginLeft: 5,
    },
    searchIcon: {
        width: 20,
        height: 20,
    },
    removeIcon: {
        width: 20,
        height: 20,
    },
});

export default FilterProducts;
