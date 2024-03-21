import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themeContext from '../config/ThemeContext';

const Confirm = ({ route }) => {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const { selectedItemsDetails } = route.params;

    // Calculate total price
    const totalPrice = selectedItemsDetails.items.reduce((total, item) => {
        return total + (parseFloat(item.price.replace('$', '')) * item.quantity);
    }, 0);

    const renderItem = ({ item }) => (
        <View style={[styles.item, { backgroundColor: theme.background }]}>
            <View>
                <Text style={[styles.itemName, { color: theme.color }]}>Name: {item.name}</Text>

                {item.size && <Text style={[styles.itemSize, { color: theme.color }]}>Size: {item.size}</Text>}
                <TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 7, width:120,height:30 ,justifyContent:'center'}}onPress={()=>navigation.navigate('Your Cart')}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Edit your items details</Text>
                </TouchableOpacity>

            </View>
            <Text style={[styles.totalItemPrice, { color: theme.color }]}>Total Price : ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</Text>


        </View>

    );


    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.header, { color: theme.color }]}>Selected Items Details:</Text>
            <FlatList
                data={selectedItemsDetails.items}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}

            />
            <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                <Text style={[styles.totalPriceText, { color: theme.color }]}>Total Price for all items : ${totalPrice.toFixed(2)}</Text>
            </View>

            <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('Your Address Book')}>
                <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemSize: {
        fontSize: 16,
    },
    totalItemPrice: {
        fontSize: 16,
    },
    totalPriceText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    confirmButton: {
        backgroundColor: 'green',
        width: '70%',
        paddingVertical: 15,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 10,
        bottom: 10,
    },
    confirmButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Confirm;
