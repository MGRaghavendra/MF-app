import { View, Text, StyleSheet } from "react-native";
import React from "react";
import LoginForm from "../components/LoginScreen/LoginFom";
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Title</Text>
        <LoginForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    color: "#000000",
    marginBottom: 10,
  },
  formContainer: {
    height: 400,
    width: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingVertical: 10,
    justifyContent: "center",
  },
});
