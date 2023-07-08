import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AppDeveloper = () => {
  const skills = ['React Native', 'JavaScript', 'UI/UX Design', 'Firebase'];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.heading}>App Developer</Text>
        <Text style={styles.subHeading}>John Doe</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={require('../assets/images.jpeg')}
          style={styles.image}
        />
        <Text style={styles.description}>
          John Doe is a skilled app developer with expertise in creating
          high-quality mobile applications. He is passionate about delivering
          exceptional user experiences and leveraging cutting-edge technologies.
        </Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skillsTitle}>Skills:</Text>
          <View style={styles.skillsContent}>
            {skills.map((skill, index) => (
              <View key={index} style={styles.skillItem}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 2,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 18,
    color: 'gray',
    margin:10,
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 100,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    margin:10,
  },
  skillsContainer: {
    alignItems: 'center',
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    margin:10,
  },
  skillsContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin:10,
  },
  skillItem: {
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 5,
    margin:10,
  },
  skillText: {
    fontSize: 14,
    color: '#333',
  },
});

export default AppDeveloper;
