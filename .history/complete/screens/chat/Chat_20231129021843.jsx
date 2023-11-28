import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Chat = ({ title, content }) => {
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState(0);

  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{content}</Text>
      <Text style={styles.title}>Xin chào, datpham123</Text>
      <Text>{content}</Text>
      <Text>Hôm nay của bạn thế nào? </Text>
      <View style={styles.segmentedControl}>
        {['Xu hướng', 'Mọi người', 'Cá nhân'].map((segment, index) => (
          <TouchableOpacity
            key={segment}
            style={[
              styles.segmentButton,
              selectedSegmentIndex === index && styles.selectedSegmentButton,
            ]}
            onPress={() => setSelectedSegmentIndex(index)}
          >
            <Text
              style={[
                styles.segmentButtonText,
                selectedSegmentIndex === index && styles.selectedSegmentButtonText,
              ]}
            >
              {segment}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>

  );
};
const StatusPost = ({ avatar, name, time, status }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.headerContainer}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      <Text style={styles.statusText}>{status}</Text>
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

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  segmentedControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  segmentButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#F3E5F5', // Default background color for non-selected segments
    marginHorizontal: 4,
  },
  selectedSegmentButton: {
    backgroundColor: '#FFA500', // Background color for the selected segment
  },
  segmentButtonText: {
    color: '#555', // Text color for non-selected segments
  },
  selectedSegmentButtonText: {
    color: '#fff', // Text color for the selected segment
  },
});

export default Chat;
