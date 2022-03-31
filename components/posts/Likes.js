import { View, Text } from "react-native";
import React from "react";

const Likes = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text
        style={{
          color: "#fff",
          marginLeft: 15,
          marginTop: 4,
          fontWeight: "700",
        }}
      >
        700 likes
      </Text>
    </View>
  );
};

export default Likes;
