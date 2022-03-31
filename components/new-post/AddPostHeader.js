import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import React from "react";

const AddPostHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/ffffff/back--v1.png",
          }}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>New Post</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
    marginRight: 23,
  },
});

export default AddPostHeader;
