import { View, Text } from "react-native";
import React from "react";

const Comments = () => {
  return (
    <>
      <View style={{ marginLeft: 15, marginTop: 4, flexDirection: "row" }}>
        <Text style={{ color: "#fff", fontWeight: "700" }}>moustafaaa.k. </Text>
        <Text style={{ color: "#fff" }}>This is awesome!</Text>
      </View>
      <View style={{ marginLeft: 15, marginTop: 4, flexDirection: "row" }}>
        <Text style={{ color: "#fff", fontWeight: "700" }}>abdelsamad </Text>
        <Text style={{ color: "#fff" }}>This is great!</Text>
      </View>
    </>
  );
};

export default Comments;
