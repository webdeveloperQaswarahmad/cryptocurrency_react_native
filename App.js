import 'react-native-gesture-handler';
import { Button, View, PermissionsAndroid } from 'react-native';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import Home from './components/Home';
import About from './components/About';
import LiveTrading from './components/LiveTrading';
import AppDeveloper from './components/appDeveloper';

// Create a drawer navigator
const Drawer = createDrawerNavigator();

const App = () => {
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app requires access to your location.',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted.');
        getPermissions();
      } else {
        console.log('Location permission denied.');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getPermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log("Please grant location permissions");
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
    console.log("Location:");
    console.log(currentLocation);
  };

  const geocode = async () => {
    const geocodedLocation = await Location.geocodeAsync(address);
    console.log("Geocoded Address:");
    console.log(geocodedLocation);
  };

  const reverseGeocode = async () => {
    const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude
    });

    console.log("Reverse Geocoded:");
    console.log(reverseGeocodedAddress);
  };

  return (
    
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#fff', // Set the background color of the sidebar
          width: 200, // Set the width of the sidebar
        }}
        screenOptions={{
          activeTintColor: '#333', // Set the active item text color
          inactiveTintColor: '#777', // Set the inactive item text color
        }}
      >
        <Drawer.Screen name="CryptoCurrency">
          {props => (
            <Home
              {...props}
              location={location}
              address={address}
              setAddress={setAddress}
              geocode={geocode}
              reverseGeocode={reverseGeocode}
            />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="LiveTrading" component={LiveTrading} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="AppDeveloper" component={AppDeveloper} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
