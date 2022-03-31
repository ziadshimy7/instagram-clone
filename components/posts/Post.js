import { View, Text } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import PostPicture from "./PostPicture";
import PostFooter from "./PostFooter";
const Post = () => {
  return (
    <>
      <View
        style={{
          marginTop: 15,
          borderTopWidth: 0.5,
          borderTopColor: "#D3D3D3",
          opacity: 0.3,
        }}
      ></View>
      <View style={{ marginTop: 10 }}>
        <PostHeader />
        <PostPicture />
        <PostFooter />
      </View>
    </>
  );
};

export default Post;
