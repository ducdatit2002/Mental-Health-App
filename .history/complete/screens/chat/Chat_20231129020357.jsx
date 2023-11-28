import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Chat = ({ title, content, commentsCount }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text>{content}</Text>
    <Text style={styles.title}>{title}</Text>
    <Text>{content}</Text>
    <Text>Hôm nay của bạn thế nào? </Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Xu hướng</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    marginTop: 8, // Add some margin at the top for spacing
    backgroundColor: '#FFA500', // Orange color for the button
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20, // Rounded corners
    alignItems: 'center', // Center the text inside the button
  },
  buttonText: {
    color: '#ffffff', // White color for the button text
    fontWeight: 'bold',
  },
});

export default Chat;
