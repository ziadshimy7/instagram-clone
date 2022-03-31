import { Image, View, Text, StyleSheet } from "react-native";
import React from "react";
const PostPicture = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/moustafa.jpg")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { height: 450, marginTop: 1 },
  image: { maxHeight: "100%", width: "100%", resizeMode: "cover" },
});
export default PostPicture;
