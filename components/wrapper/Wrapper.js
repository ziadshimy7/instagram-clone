import { SafeAreaView, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

const Wrapper = (Component) => {
  return () => (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/instagram.png")}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, width: 415 }}
        keyboardShouldPersistTaps="handled"
      >
        <Component />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 60,
  },
});
export default Wrapper;
