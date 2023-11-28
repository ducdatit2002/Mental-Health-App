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
