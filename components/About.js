import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const About = ({country}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Profile</Text>
        <Text style={styles.balance}>Current Balance: <Text style={styles.balancePrice}>$300.120</Text></Text>
        <Text style={styles.balance}>Welcome to our cryptocurrency app! We are
           dedicated to providing you with the latest 
           information, news, and insights from the exciting world of cryptocurrencies.</Text>
           <Text style={styles.heading}>Our Mission</Text>
           <Text style={styles.balance}>Empowering users with knowledge and tools to navigate the crypto world. Real-time data, insights, and a vibrant community drive informed decisions. Join us on the journey to financial empowerment.</Text>
<View>
<Text style={styles.countryText}>Your country: {country}</Text>

</View>
        <Image source={require('../assets/wallet.png')} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  balance: {
    fontSize: 18,
    marginBottom: 10,
  },
  balancePrice:{
    fontSize: 18,
    marginBottom: 20,
    color:'green'
  },
  countryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginTop: 10,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
    borderRadius: 8,
    alignSelf: 'center',
  },
});

export default About;
