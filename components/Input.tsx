import { TextInput, StyleSheet, KeyboardTypeOptions } from "react-native";
import Colors from "../constants/Colors";
import Theme from "../constants/Theme";

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

export default function Input({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
}: Props) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={Colors.gray}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize="none"
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