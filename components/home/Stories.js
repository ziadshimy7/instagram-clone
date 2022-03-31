import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
const storiesIcons = [
  {
    id: 1,
    name: "ziadshimyyyyyyy",
    imgSource: require("../../assets/45ac9394-e58e-48f9-ad8a-a641db544e11-modified.png"),
  },
  {
    id: 2,
    name: "ziadshimyyyyyyy",
    imgSource: require("../../assets/45ac9394-e58e-48f9-ad8a-a641db544e11-modified.png"),
  },
  {
    id: 3,
    name: "Hosaaaaaaaaaaam",
    imgSource: require("../../assets/45ac9394-e58e-48f9-ad8a-a641db544e11-modified.png"),
  },
  {
    id: 4,
    name: "nice",
    imgSource: require("../../assets/45ac9394-e58e-48f9-ad8a-a641db544e11-modified.png"),
  },
  {
    id: 5,
    name: "fash5",
    imgSource: require("../../assets/45ac9394-e58e-48f9-ad8a-a641db544e11-modified.png"),
  },
];
const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {storiesIcons.map((user) => (
          <View style={styles.storiesContainer} key={user.id}>
            <Image style={styles.image} source={user.imgSource} />
            <Text style={styles.text}>
              {user.name.length > 11
                ? user.name.slice(0, 9) + "..."
                : user.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  storiesContainer: {
    alignItems: "center",
  },
  image: {
    width: 65,
    height: 65,
    resizeMode: "contain",
    borderWidth: 3,
    borderRadius: 50,
    marginLeft: 10,
    borderColor: "#ff8501",
  },
  text: {
    color: "#fff",
    marginTop: 7,
    fontSize: 15,
    marginLeft: 10,
  },
});
export default Stories;
