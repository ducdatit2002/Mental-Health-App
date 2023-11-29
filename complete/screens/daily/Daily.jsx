import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

// Nhat Ky
const DiaryEntry = ({ date, content }) => {
  return (
    <View style={styles.entryContainer}>
      <Text style={styles.dateText}>{date}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

const MenuOption = ({ title, subtitle, onPress }) => (
  <TouchableOpacity style={styles.menuOption} onPress={onPress}>
    <Text style={styles.menuOptionTitle}>{title}</Text>
    {subtitle && <Text style={styles.menuOptionSubtitle}>{subtitle}</Text>}
  </TouchableOpacity>
);

const ActionIcon = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.actionIconContainer} onPress={onPress}>
    {/* <Image source={icon} style={styles.actionIcon} /> */}
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const Daily = () => {
  const [activeView, setActiveView] = useState("menu");

  const renderDiaryEntries = () => (
    <ScrollView style={styles.scrollView}>
      {/* Here you would map through your diary entries data */}
      <DiaryEntry
        date="Tuần này"
        content="Nhớ em rất nhiều, em ơi anh nhớ em rất nhiều. Anh nhớ hơn cả nhớ nhà nhưng em đâu nhớ gì đôi ta"
      />
      <DiaryEntry
        date="lorem ipsum"
        content="lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <DiaryEntry
        date="lorem ipsum"
        content="lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <DiaryEntry
        date="lorem ipsum"
        content="lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <DiaryEntry
        date="lorem ipsum"
        content="lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <DiaryEntry
        date="lorem ipsum"
        content="lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />

      {/* Repeat for other diary entries */}
    </ScrollView>
  );

  const renderMenuOptions = () => (
    <>
      <MenuOption title="Bài tập thiền" subtitle="Có hướng dẫn" />
      <MenuOption title="Đặt mục tiêu" subtitle="Đặt mục tiêu riêng tư" />
      <MenuOption title="Kiểm tra danh sách" />
    </>
  );

  const renderActionIcons = () => (
    <View style={styles.actionIconsRow}>
      {/* Replace with your actual icons and labels */}
      <ActionIcon
        // icon={require("./path-to-meditation-icon.png")}
        label="Meditation"
      />
      <ActionIcon
        //icon={require("./path-to-goal-icon.png")}
        label="Goals"
      />
      <ActionIcon
        //icon={require("./path-to-checklist-icon.png")}
        label="Checklist"
      />
      <ActionIcon
        // icon={require("./path-to-medicine-icon.png")}
        label="Medicine"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Daily diary</Text>
      </View>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Nhật ký</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            multiline
            placeholder="Viết cho hôm nay 😊"
            placeholderTextColor="#8E8E93"
            textAlignVertical="top" // This ensures the placeholder text starts at the top
          />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dropdownHeader}>
        <TouchableOpacity onPress={() => setActiveView("diary")}>
          <Text style={styles.dropdownTitle}>Nhật ký đã viết</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveView("menu")}>
          <Text style={styles.dropdownTitle}>Danh mục</Text>
        </TouchableOpacity>
      </View>

      {activeView === "menu" ? (
        <>
          {renderMenuOptions()}
          {renderActionIcons()}
        </>
      ) : (
        renderDiaryEntries()
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBEFFB",
    paddingTop: 20,
  },
  // Dropdown
  dropdownHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  dropdownTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  dropdownIcon: {
    width: 24,
    height: 24,
  },
  menuOption: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2", // Adjust color as needed
  },
  menuOptionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  menuOptionSubtitle: {
    fontSize: 14,
    color: "#6E6E6E", // Adjust color as needed
  },
  actionIconsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "#FFF0F5", // The background color for the action icon row
  },
  actionIconContainer: {
    alignItems: "center",
  },
  actionIcon: {
    width: 40,
    height: 40,
  },
  actionLabel: {
    marginTop: 5,
    fontSize: 12,
  },
  // End of Dropdown
  // Viet Nhat Ky
  header: {
    backgroundColor: "#FEE2F1",
    padding: 20,
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "space-betwween",
  },
  titleContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 9,
    padding: 8,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    color: "#000",
  },
  addButton: {
    width: 24,
    height: 24,
    backgroundColor: "#FFD1DC",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 24,
    color: "#000",
    lineHeight: 24,
  },
  // End of Viet Nhat Ky\
  // Nhat Ky da viet
  headerContainer: {
    padding: 20,
    backgroundColor: "#FBEFFB",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  scrollView: {
    padding: 20,
  },
  entryContainer: {
    marginBottom: 20,
    backgroundColor: "#EFE7FE",
    borderRadius: 10,
    padding: 15,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#A349A4",
    marginBottom: 5,
  },
  contentText: {
    fontSize: 14,
    color: "#333",
  },
  // End of Nhat Ky da viet
});

export default Daily;
