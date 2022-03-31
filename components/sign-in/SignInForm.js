import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
const SignInForm = () => {
  const navigation = useNavigation();
  const validationSchema = Yup.object({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string()
      .min(8, "Password should contain 8 or more characters")
      .required("Please enter your password"),
  });
  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
      initialValues={{ username: "", password: "" }}
    >
      {(formik) => (
        <View style={styles.container}>
          <TextInput
            placeholderTextColor={"#444"}
            style={styles.input}
            name="username"
            id="username"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            placeholder="Phone number, username or email"
            onBlur={formik.handleBlur("username")}
            onChangeText={formik.handleChange("username")}
            value={formik.values.username}
          ></TextInput>
          <TextInput
            name="password"
            id="password"
            textContentType="password"
            placeholderTextColor={"#444"}
            style={[
              styles.input,
              {
                borderColor:
                  formik.values.password.length >= 8 ||
                  formik.values.password.length < 1
                    ? "#ccc"
                    : "red",
              },
            ]}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            onBlur={formik.handleBlur("password")}
            onChangeText={formik.handleChange("password")}
            value={formik.values.password}
          ></TextInput>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
              marginBottom: 25,
            }}
          >
            <Text style={styles.linkText}>Forgot Password ?</Text>
          </View>
          <Pressable
            onPress={formik.handleSubmit}
            disabled={!(formik.isValid && formik.dirty)}
            style={
              formik.isValid && formik.dirty ? styles.button : styles.disabled
            }
          >
            <Text style={styles.text}>Log In</Text>
          </Pressable>
          <Text style={{ marginTop: 60 }}>
            Don't have an account ?{" "}
            <Text
              onPress={() => navigation.navigate("SignupScreen")}
              style={styles.linkText}
            >
              {" "}
              Sign up
            </Text>
          </Text>
        </View>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "95%",
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    marginBottom: 10,
    marginHorizontal: 10,
    borderColor: "#ccc",
  },
  button: {
    width: "95%",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3897f0",
    padding: 12,
    borderRadius: 5,
    fontSize: 20,
  },
  text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  disabled: {
    width: "95%",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
    padding: 12,
    borderRadius: 5,
    fontSize: 20,
  },
  errorText: {
    color: "red",
    fontWeight: "400",
    fontSize: 10,
    marginRight: 250,
    marginBottom: 10,
  },
  linkText: {
    color: "#6BB0F5",
    marginRight: 10,
  },
});
export default SignInForm;
