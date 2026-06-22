import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Button from "../components/Button";
import Input from "../components/Input";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Township Cart</Text>

      <Text style={styles.title}>Welcome Back 👋</Text>

      <Input
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        title="Login"
        onPress={() => console.log("Login pressed")}
      />

      <TouchableOpacity>
        <Text style={styles.signupText}>
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  logo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#22C55E",
    marginBottom: 10,
    textAlign: "center",
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },

  signupText: {
    color: "#CBD5E1",
    textAlign: "center",
    marginTop: 24,
  },
});