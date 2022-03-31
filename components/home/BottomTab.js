import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
const icons = [
  {
    name: "home",
    link: "https://img.icons8.com/ios/50/ffffff/home--v1.png",
    filledLink: "https://img.icons8.com/ios-filled/50/ffffff/home.png",
  },
  {
    name: "search",
    link: "https://img.icons8.com/ios/50/ffffff/search--v1.png",
    filledLink: "https://img.icons8.com/ios-filled/50/ffffff/search--v1.png",
  },
  {
    name: "reels",
    link: "https://img.icons8.com/ios/50/ffffff/instagram-reel.png",
    filledLink:
      "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
  },
  {
    name: "likes",
    link: "https://img.icons8.com/ios/50/ffffff/hearts--v1.png",
    filledLink: "https://img.icons8.com/ios-filled/50/ffffff/hearts.png",
  },
];
const BottomTab = () => {
  const [activeIcon, setActiveIcon] = useState("home");
  return (
    <>
      <View
        style={{ borderTopWidth: 0.5, borderTopColor: "#D3D3D3", opacity: 0.3 }}
      ></View>
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <TouchableOpacity
            onPress={() => {
              setActiveIcon(icon.name);
            }}
            key={icon.name}
          >
            <Image
              style={{ width: 26, height: 26 }}
              source={{
                uri: activeIcon === icon.name ? icon.filledLink : icon.link,
              }}
            />
          </TouchableOpacity>
        ))}
        <Image
          style={{ width: 26, height: 26 }}
          source={require("../../assets/45ac9394-e58e-48f9-ad8a-a641db544e11-modified.png")}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    height: 50,
    borderTopColor: "gray",
  },
});
export default BottomTab;
