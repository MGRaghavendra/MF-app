import { Formik } from "formik";
import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import * as Yup from "yup";
const validationSchema = Yup.object({
  phonenumber: Yup.string()
    .max(10, "Must be 10 characters or less")
    .required("Required"),
  password: Yup.string().min(6, "Minumum 6 characters").required("Required"),
});
export default function LoginForm() {
  return (
    <Formik
      initialValues={{ phonenumber: "", password: "" }}
      onSubmit={() => {
        console.log("submitting..");
      }}
      validationSchema={validationSchema}
    >
      {({ values, errors, handleChange, handleBlur }) => {
        console.log(errors);
        return (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputBox}
              placeholder="012-345-6789"
              keyboardType="numeric"
              onChangeText={handleChange("phonenumber")}
              value={values.phonenumber}
              onBlur={handleBlur("phonenumber")}
            />
            <Text style={styles.error}>*{errors.phonenumber}</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="password"
              placeholderTextColor="rgb(153,153,153)"
              onChangeText={handleChange("password")}
              value={values.password}
              onBlur={handleBlur("password")}
            />
            <Text style={styles.error}>*{errors.password}</Text>
          </View>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  inputBox: {
    height: 42,
    borderColor: "#000",
    borderWidth: 1,
    width: "100%",
    borderRadius: 5,
    marginVertical: 5,
    fontSize: 16,
    paddingHorizontal: 7,
  },
  error: {
    color: "red",
    fontSize: 13,
  },
});
