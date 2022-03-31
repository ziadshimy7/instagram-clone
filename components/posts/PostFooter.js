import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Likes from "./Likes";
import Captions from "./Captions";
import CommentSection from "./CommentSection";
import Comments from "./Comments";
const PostFooter = () => {
  return (
    <>
      <View style={styles.iconContainer}>
        <View
          style={{
            flexDirection: "row",
            width: "32%",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
            }}
          />
          <Image
            style={{ width: 30, height: 30 }}
            source={{
              uri: "https://img.icons8.com/material-outlined/60/ffffff/filled-topic.png",
            }}
          />
          <Image
            style={{
              width: 25,
              height: 29,
              transform: [{ rotate: "320deg" }],
              marginTop: -3,
            }}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/96/ffffff/sent.png",
            }}
          />
        </View>
        <Ionicons name="ios-bookmark-outline" size={30} color="white" />
      </View>
      <Likes />
      <Captions />
      <CommentSection />
      <Comments />
    </>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 10,
  },
});
export default PostFooter;
