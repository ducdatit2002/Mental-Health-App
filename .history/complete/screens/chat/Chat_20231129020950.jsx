import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install expo vector icons

const Chat = ({ username, timestamp, content, initialLikesCount }) => {
  const [likesCount, setLikesCount] = useState(initialLikesCount);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePress = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.postContainer}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your avatar image source
        style={styles.avatar}
      />
      <View style={styles.postContent}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
        <Text style={styles.content}>{content}</Text>
        <View style={styles.interactionBar}>
          <TouchableOpacity onPress={handleLikePress} style={styles.interactionButton}>
            <Ionicons
              name={isLiked ? 'heart' : 'heart-outline'}
              size={24}
              color={isLiked ? 'red' : 'grey'}
            />
            <Text style={styles.likesCount}>{likesCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.interactionButton}>
            <Ionicons name='chatbubble-outline' size={24} color='grey' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#F8F8F8', // Use the background color that matches your app design
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  postContent: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: 12,
    color: 'grey',
  },
  content: {
    marginTop: 4,
  },
  interactionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  interactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  likesCount: {
    marginLeft: 4,
  },
});

export default ForumPost;
