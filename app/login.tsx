import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Button from "../components/Button";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Township Cart</Text>

      <Text style={styles.title}>Welcome Back 👋</Text>

      <TextInput
        placeholder="Enter your email"
        placeholderTextColor="#94A3B8"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Enter your password"
        placeholderTextColor="#94A3B8"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
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

  input: {
    backgroundColor: "#1E293B",
    color: "white",
    padding: 16,
    borderRadius: 14,
    marginBottom: 16,
    fontSize: 16,
  },

  signupText: {
    color: "#CBD5E1",
    textAlign: "center",
    marginTop: 24,
  },
});