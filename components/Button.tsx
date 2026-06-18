import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Theme from "../constants/Theme";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius,
    alignItems: "center",
  },

  text: {
    color: Colors.white,
    fontSize: Theme.fontSize.medium,
    fontWeight: "bold",
  },
});