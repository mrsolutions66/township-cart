import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Theme from "../constants/Theme";

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

export default function Input({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: InputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={Colors.gray}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#1E293B",
    color: Colors.white,
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius,
    marginBottom: Theme.spacing.md,
    fontSize: Theme.fontSize.medium,
  },
});