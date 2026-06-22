import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Input from "../components/Input";
import Button from "../components/Button";

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <Input
        placeholder="Full Name"
        value=""
        onChangeText={() => {}}
      />

      <Input
        placeholder="Email"
        value=""
        onChangeText={() => {}}
        keyboardType="email-address"
      />

      <Input
        placeholder="Password"
        value=""
        onChangeText={() => {}}
        secureTextEntry
      />

      <Input
        placeholder="Confirm Password"
        value=""
        onChangeText={() => {}}
        secureTextEntry
      />

      <Button
        title="Create Account"
        onPress={() => console.log("Create Account Pressed")}
      />

      <Link href="/login" style={styles.link}>
        Already have an account? Login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  link: {
    marginTop: 20,
    textAlign: "center",
    color: "#007AFF",
    fontWeight: "600",
  },
});