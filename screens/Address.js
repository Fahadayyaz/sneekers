import React, { useState, useRef, useContext } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Modal, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themeContext from '../config/ThemeContext';

const Address = () => {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [hasAddressInput, setHasAddressInput] = useState(false); // Flag to indicate if address field has input

    const fullNameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const phoneNumberInputRef = useRef(null);
    const addressInputRef = useRef(null);

    const handleInputChange = (text, field) => {
        if (field === 'fullName') {
            setFullName(text);
        } else if (field === 'email') {
            setEmail(text);
        } else if (field === 'phoneNumber') {
            setPhoneNumber(text);
        } else if (field === 'address') {
            setAddress(text);
            if (text.trim().length > 0) {
                setHasAddressInput(true);
            } else {
                setHasAddressInput(false);
            }
        }
    };

    const handleAddAddress = () => {
        // Check if all fields are filled
        if (fullName.trim() === '' || email.trim() === '' || phoneNumber.trim() === '' || address.trim() === '') {
            alert('Please fill in all the fields before adding the address.');
            return;
        }

        // Add your additional validation logic here if needed

        // Proceed with adding the address
        setShowModal(true);
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[{ fontSize: 20, alignSelf: 'center', marginBottom: 20 }, { color: theme.color }]}>Fill your address</Text>
            <TextInput
                ref={fullNameInputRef}
                style={[styles.input, { borderColor: theme.color, color: theme.color }]}
                placeholder="Full Name"
                placeholderTextColor={theme.color}
                value={fullName}
                onChangeText={text => handleInputChange(text, 'fullName')}
                keyboardType='name-phone-pad'
                returnKeyType='next'
                onSubmitEditing={() => { emailInputRef.current.focus(); }}
            />

            <TextInput
                ref={emailInputRef}
                style={[styles.input, { borderColor: theme.color, color: theme.color }]}
                placeholder="Email Number"
                placeholderTextColor={theme.color}
                value={email}
                onChangeText={text => handleInputChange(text, 'email')}
                keyboardType='email-address'
                returnKeyType='next'
                onSubmitEditing={() => { phoneNumberInputRef.current.focus(); }}
            />

            <TextInput
                ref={phoneNumberInputRef}
                style={[styles.input, { borderColor: theme.color, color: theme.color }]}
                placeholder="Phone Number"
                placeholderTextColor={theme.color}
                value={phoneNumber}
                onChangeText={text => handleInputChange(text, 'phoneNumber')}
                keyboardType="phone-pad"
                returnKeyType='next'
                onSubmitEditing={() => { addressInputRef.current.focus(); }}
            />

            <TextInput
                ref={addressInputRef}
                style={[styles.input, { borderColor: theme.color, color: theme.color }]}
                placeholder="Address"
                placeholderTextColor={theme.color}
                value={address}
                onChangeText={text => handleInputChange(text, 'address')}
                multiline={true}
                returnKeyType={hasAddressInput ? 'go' : 'default'}
                onSubmitEditing={handleAddAddress}
            />

            <TouchableOpacity style={styles.addButton} onPress={handleAddAddress}>
                <Text style={styles.addText}>Add Address</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(false)}>
                <View style={styles.modalContainer}>
                    <View style={[styles.modalContent, { backgroundColor: theme.background }]}>
                        <Text style={{ color: theme.color }}>Address added successfully!</Text>
                        <TouchableOpacity onPress={() => { setShowModal(false); navigation.navigate('Payment Method'); }} style={styles.okButton}>
                            <Text style={styles.okButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    addButton: {
        backgroundColor: 'green',
        width: '90%',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'center',
    },
    addText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
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
        borderRadius: 10,
        alignItems: 'center',
        height: 110,
        width: 250
    },
    okButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        width: 100
    },
    okButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Address;
