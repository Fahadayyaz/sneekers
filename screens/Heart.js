import React from 'react';
import { View, Text, Image } from 'react-native';

const Heart = ({ route }) => {
  const name = route.params?.name;
  const price = route.params?.price;

  const renderImage = () => {
    if (name) {
      return (
        <Image source={require('../assets/images/shoes1.jpg')} style={{ width: 200, height: 200 }} />
      );
    } else {
      return null;
    }
  };

  return (
    <View>
      {renderImage()}
      {name && price && (
        <View>
          <Text>Name : {name}</Text>
          <Text>Price : {price}</Text>
        </View>
      )}
    </View>
  );
};

export default Heart;
