import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Animated, Text, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Home = ({ navigation, country }) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [isTradeVisible, setIsTradeVisible] = useState(true); // State variable to toggle "Trade" text

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

  const toggleTradeText = () => {
    setIsTradeVisible(!isTradeVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Animatable.Text animation="zoomInUp" style={styles.cardText}>
          Explore the World of Cryptocurrency: Embrace Innovation, Security, and Financial Freedom with Digital Assets
        </Animatable.Text>
        <Image source={require('../assets/front.jpeg')} style={styles.graph} />
        <Animatable.Text style={styles.animationText} animation="slideInDown" iterationCount={5} direction="alternate">
          If you want to see live Trading? Click below to see live Trading.
        </Animatable.Text>
        <Text style={styles.countryText}>Your country: {country}</Text>
      </View>

      <View style={[styles.footer, { backgroundColor: '#f0f0f0' }]}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LiveTrading')}>
          <Text style={[styles.buttonText, { color: '#333' }]}>See Live Market Trading</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 20,
    alignItems: 'center',
  },
  animationText: {
    fontSize: 12,
    width: 250,
    color: '#333',
    textAlign: 'center',
    margin: 13,
    marginBottom: 10,
    color: 'red',
  },
  cardText: {
    fontSize: 12,
    width: 250,
    color: '#333',
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: '500',
    lineHeight: 22,
  },
  graph: {
    width: 300,
    height: 400,
    borderRadius: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  countryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginTop: 10,
  },
});

export default Home;
