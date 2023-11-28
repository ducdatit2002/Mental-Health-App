import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Chat = ({ title, content, commentsCount }) => (
  <View style={styles.container}>

    <Text>Hi</Text>
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
});

export default Chat;
