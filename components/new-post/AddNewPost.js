import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AddPostHeader from "./AddPostHeader";
import PostForm from "./PostForm";
const AddNewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AddPostHeader navigation={navigation} />
      <PostForm navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default AddNewPost;
