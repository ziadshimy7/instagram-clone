import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import AddNewPost from "../components/new-post/AddNewPost";

const NewPostScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#000", flex: 1 }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ flex: 1, backgroundColor: "black" }}
      >
        <AddNewPost navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPostScreen;
