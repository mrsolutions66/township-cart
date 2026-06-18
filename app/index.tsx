import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Township Cart</Text>

      <Text style={styles.subtitle}>
        Fast local deliveries powered by township youth 🚲
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  logo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#22C55E",
    marginBottom: 12,
  },

  subtitle: {
    color: "#CBD5E1",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#22C55E",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 14,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});