import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Chat = ({ avatar, name, time, status }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.headerContainer}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.name}>Đức Đạt</Text>
          <Text style={styles.time}>Bây giờ</Text>
        </View>
      </View>
      <Text style={styles.statusText}>Xin chào</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTextContainer: {
    marginLeft: 8,
  },
  name: {
    fontWeight: 'bold',
  },
  time: {
    color: '#555',
    fontSize: 12,
  },
  statusText: {
    marginTop: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

export default Chat;
