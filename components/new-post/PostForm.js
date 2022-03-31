import { View, Text, Image, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import validURL from "valid-url";
import { useNavigation } from "@react-navigation/native";
const uploadPostSchema = Yup.object().shape({
  imageURL: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit"),
});
const placeholderImage = "https://via.placeholder.com/600x400";
const PostForm = ({}) => {
  const navigation = useNavigation();
  const [thumbnailURL, setThumbNailURL] = useState(placeholderImage);
  return (
    <Formik
      initialValues={{ caption: "", imageURL: "" }}
      onSubmit={(values) => {
        console.log(values);
        console.log("Post successfully submitted");
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
        dirty,
        touched,
      }) => (
        <>
          <View style={styles.container}>
            <Image
              source={{
                uri: validURL.isUri(thumbnailURL)
                  ? thumbnailURL
                  : placeholderImage,
              }}
              style={{ width: 100, height: 100 }}
            />

            <TextInput
              style={[{ fontSize: 20 }, styles.placeholderText]}
              placeholder="Write a caption..."
              placeholderTextColor={"gray"}
              multiline
              onChangeText={handleChange("caption")}
              onBlur={handleBlur("caption")}
              value={values.caption}
            />
          </View>
          <View
            style={{
              borderTopColor: "gray",
              borderTopWidth: "1",
              opacity: 0.4,
            }}
          ></View>

          <TextInput
            style={[styles.placeholderText, { marginTop: 12, fontSize: 18 }]}
            placeholder="Enter image url"
            onChange={(e) => {
              setThumbNailURL(e.nativeEvent.text);
            }}
            placeholderTextColor={"gray"}
            onChangeText={handleChange("imageURL")}
            onBlur={handleBlur("imageURL")}
            value={values.imageURL}
          />
          {errors.imageURL && touched.imageURL && (
            <Text style={{ fontSize: 10, color: "red" }}>
              {errors.imageURL}
            </Text>
          )}
          <Button
            onPress={handleSubmit}
            title="Share"
            disabled={!(isValid && dirty)}
          ></Button>
        </>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: "row",
  },
  placeholderText: {
    marginLeft: 12,
    color: "#fff",
  },
});

export default PostForm;
