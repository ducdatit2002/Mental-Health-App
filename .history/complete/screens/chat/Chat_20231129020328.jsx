import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Ch = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.segmentControlContainer}>
      {['Xu hướng', 'Mọi người', 'Cá nhân'].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.segmentButton,
            selectedIndex === index && styles.segmentButtonActive,
          ]}
          onPress={() => setSelectedIndex(index)}
        >
          <Text
            style={[
              styles.segmentButtonText,
              selectedIndex === index && styles.segmentButtonTextActive,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  segmentControlContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 4,
    backgroundColor: '#F3E5F5', // The light purple background color
  },
  segmentButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    borderRadius: 20,
    backgroundColor: '#FFFFFF', // Default inactive button color
    alignItems: 'center',
  },
  segmentButtonActive: {
    backgroundColor: '#FFA500', // Active button color
  },
  segmentButtonText: {
    color: '#555', // Default inactive text color
  },
  segmentButtonTextActive: {
    color: '#FFFFFF', // Active text color
  },
});

export default SegmentControl;
