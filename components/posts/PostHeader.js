import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
const PostHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("../../assets/45ac9394-e58e-48f9-ad8a-a641db544e11-modified.png")}
        />
        <Text style={styles.text}>ziadshimyyy</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.dots}>...</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1.6,
    marginRight: 7,
    borderColor: "orange",
  },
  text: {
    color: "#fff",
    fontWeight: "600",
  },
  dots: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});
export default PostHeader;
