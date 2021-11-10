import { Formik } from "formik";
import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Yup from "yup";
const validationSchema = Yup.object({
  phonenumber: Yup.string()
    .min(10, "Minumum 10 characters")
    .max(10, "Maximum 10 characters")
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
      validateOnMount={true}
    >
      {({ values, errors, handleChange, handleBlur, isValid }) => {
        return (
          <View style={styles.inputContainer}>
            <TextInput
              style={{
                ...styles.inputBox,
                borderColor: !errors.phonenumber ? "lightgreen" : "red",
              }}
              placeholder="012-345-6789"
              keyboardType="numeric"
              onChangeText={handleChange("phonenumber")}
              placeholderTextColor="rgb(153,153,153)"
              value={values.phonenumber}
              onBlur={handleBlur("phonenumber")}
              autoFocus={true}
            />
            {errors.phonenumber && (
              <Text style={styles.error}>{`*${errors.phonenumber}`}</Text>
            )}
            <TextInput
              style={{
                ...styles.inputBox,
                borderColor: !errors.password ? "lightgreen" : "red",
              }}
              placeholder="password"
              placeholderTextColor="rgb(153,153,153)"
              onChangeText={handleChange("password")}
              value={values.password}
              onBlur={handleBlur("password")}
              secureTextEntry={true}
            />
            {errors.password && (
              <Text style={styles.error}>{`*${errors.password}`}</Text>
            )}
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                if (isValid) {
                  Alert.alert("AlertTitle", JSON.stringify(values, null, 2), [
                    {
                      text: "Cancel",
                      style: "cancel",
                    },
                    { text: "OK" },
                  ]);
                }
              }}
            >
              <View style={{ ...styles.button, opacity: !isValid ? 0.8 : 1 }}>
                <Text style={styles.buttonText}>Log In</Text>
              </View>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Text
                style={{ color: "royalblue", fontSize: 13, fontWeight: "500" }}
              >
                Forgot Password?
              </Text>
            </View>
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
    borderWidth: 1.5,
    width: "100%",
    borderRadius: 6,
    marginVertical: 7,
    fontSize: 16,
    paddingHorizontal: 7,
  },
  error: {
    color: "red",
    fontSize: 13,
  },
  button: {
    backgroundColor: "#007BFF",
    alignItems: "center",
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 6,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "capitalize",
  },
});
