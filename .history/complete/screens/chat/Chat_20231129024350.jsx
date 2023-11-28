import React, { useState } from "react";
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// StatusPost Component
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
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="send-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Chat Component
const Chat = ({ title, content }) => {
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState(0);

  const statusPostData = [
  {
    avatar: "https://scontent.fsgn16-1.fna.fbcdn.net/v/t1.6435-9/82491219_1311242152395259_3382338697524412416_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_ohc=mmLy1KC8V-kAX-pSbYa&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfBkz4mF_VI6l1x1sULPlldLmH1NE4HAB3emXhu2h7fpUQ&oe=658D97ED",
    name: "Nguyễn Hoàng Luân",
    time: "1 hour ago",
    status: "Có biện pháp nào giảm căng thẳng trong mùa thi cử không?",
  },
  {
    avatar: "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/336152242_1798787447183497_7036806404262520228_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CTT8OaOXAfsAX_6-bF7&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfDP4dVnS8XoMcx_Gz0em46QpQxrIaxZGuF-uiXuLzb_wQ&oe=656B5B69",
    name: "Thảo My Nguyễn",
    time: "now",
    status: "Có cách nào để duy trì tinh thần tích cực và quản lý căng thẳng hàng ngày khi đang điều trị rồi loạn lo âu?",
  },
  {
    avatar: "https://placekitten.com/200/200",
    name: "Minh Đức",
    time: "1 hour ago",
    status: "Có biện pháp nào giảm căng thẳng trong mùa thi cử không?",
  },
  
];

  return (
    <ScrollView style={styles.container}>
      {/* Chat Section */}
      <Text style={styles.title}>{title}</Text>
      <Text>{content}</Text>
      <Text style={styles.title}>Xin chào, datpham123</Text>
      <Text>{content}</Text>
      <Text>Hôm nay của bạn thế nào? </Text>
      <View style={styles.segmentedControl}>
        {["Xu hướng", "Mọi người", "Cá nhân"].map((segment, index) => (
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
                selectedSegmentIndex === index &&
                  styles.selectedSegmentButtonText,
              ]}
            >
              {segment}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Status Post Section */}
      {statusPostData.map((postData, index) => (
        <StatusPost
          key={index}
          avatar={postData.avatar}
          name={postData.name}
          time={postData.time}
          status={postData.status}
        />
      ))}
    </ScrollView>
  );
};

// Combined styles
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  segmentedControl: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
  segmentButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#F3E5F5",
    marginHorizontal: 4,
  },
  selectedSegmentButton: {
    backgroundColor: "#FFA500",
  },
  segmentButtonText: {
    color: "#555",
  },
  selectedSegmentButtonText: {
    color: "#fff",
  },
  postContainer: {
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    fontWeight: "bold",
  },
  time: {
    color: "#555",
    fontSize: 12,
  },
  statusText: {
    marginTop: 8,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
});

export default Chat;
