import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons, FontAwesome5 } from "@expo/vector-icons";
import theme from "./config/Theme.js";
import ThemeContext from "./config/ThemeContext.js";
import { EventRegister } from "react-native-event-listeners";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import your screens
import Home from "./screens/Home.js";
import Address from "./screens/Address.js";
import Settings from "./screens/Settings.js";
import Search from "./screens/Search.js";
import Profile from "./screens/Profile.js";
import AddToCart from "./screens/AddToCart.js";
import Notification from "./screens/Notification.js";
import FamousShoes from "./screens/FamousShoes.js";
import ImageDetails from "./screens/ImageDetails.js";
import Payment from "./screens/Payment.js";
import SignUp from "./screens/SignUp.js";
import Login from "./screens/Login.js";
import Confirm from "./screens/Confirm.js";
import Heart from "./screens/Heart.js";
import AllBrandsCategory from "./screens/AllBrandsCategory.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationContextProvider from "./contexts/NotificationsContext.jsx";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const [isHearted, setIsHearted] = useState(false);

  const toggleHeart = async (selectedSize) => {
    setIsHearted(!isHearted);
    if (!isHearted) {
      try {
        // Include all necessary details in the stored product details
        const updatedProductDetails = {
          name: productName,
          price: productPrice,
          selectedSize,
        };
        await AsyncStorage.setItem(
          "productDetails",
          JSON.stringify(updatedProductDetails)
        );
      } catch (error) {
        console.error("Error storing product details:", error);
      }
    } else {
      try {
        await AsyncStorage.removeItem("productDetails");
      } catch (error) {
        console.error("Error removing product details:", error);
      }
    }
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AllBrandsCategory" component={AllBrandsCategory} />
      <Stack.Screen name="Famous Shoes Screen" component={FamousShoes} />
      <Stack.Screen name="All Brands Category" component={AllBrandsCategory} />
      <Stack.Screen
        name="Your Product Detail"
        component={ImageDetails}
        // options={{
        //   headerShown: true,
        //   headerRight: () => (
        //     <View>
        //       <TouchableOpacity onPress={toggleHeart}>
        //         <AntDesign
        //           name={isHearted ? "heart" : "hearto"}
        //           size={24}
        //           color={isHearted ? "red" : "black"}
        //         />
        //       </TouchableOpacity>
        //     </View>

        //   ),
        // }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Heart"
        component={Heart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Your Cart"
        component={AddToCart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Your Address Book"
        component={Address}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment Method"
        component={Payment}
        options={{
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTintColor: theme.color,
        }}
      />

      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "green" },
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: "black",
        tabBarVisible: getTabBarVisibility(route),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="home" size={24} color={color} />
          ),
          tabBarVisible: route.state && route.state.index === 0, // Hide tab bar when navigating to other screens
        })}
      />
      {/* <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<AntDesign name="setting" size={24} color={color} />), }} /> */}
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Heart"
        component={Heart}
        options={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Function to determine tab bar visibility based on route name
const getTabBarVisibility = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : "";

  // Hide tab bar on the Search screen
  if (routeName === "Search") {
    return false;
  }

  return true;
};

export default function App() {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    const eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);

  return (
    <NotificationContextProvider>
      <ThemeContext.Provider value={mode === true ? theme.dark : theme.light}>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              drawerStyle: {
                backgroundColor: "white",
                width: 250,
              },
              headerStyle: {
                backgroundColor: "green",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              drawerActiveTintColor: "blue",
              drawerLabelStyle: {
                color: "#111",
              },
            }}
          >
            <Drawer.Screen
              name="Home"
              options={{
                headerShown: true,
                drawerLabel: "Home",
                title: "Sneakers E-commerce",
                drawerIcon: () => (
                  <FontAwesome5 name="home" size={22} color="black" />
                ),
              }}
              component={TabNavigator}
            />
            <Drawer.Screen
              name="AddToCart"
              component={AddToCart}
              options={{
                drawerIcon: () => (
                  <AntDesign name="shoppingcart" size={22} color="black" />
                ),
              }}
            />
            <Drawer.Screen
              name="Notifications"
              component={Notification}
              options={{
                drawerIcon: () => (
                  <AntDesign name="bells" size={22} color="black" />
                ),
              }}
            />
            <Drawer.Screen
              name="Settings"
              component={Settings}
              options={{
                drawerIcon: () => (
                  <AntDesign name="setting" size={24} color="black" />
                ),
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </NotificationContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
