import { ReactNode } from "react";
import { TextInput, View, Text } from "react-native";

type InputProps = {
  placeholder: string;
  error?: string;
  disabled: boolean;
  startIcon?: ReactNode;
  secureTextEntry: any
  endIcon?: ReactNode;
  onChangeText: (value: string) => void
  value: string;
  placeholderTextColor: string
};

export function InputComponent({
  placeholder,
  error,
  disabled,
  startIcon,
  endIcon,
  onChangeText,
  secureTextEntry,
  placeholderTextColor,
  value,
  ...props
}: InputProps) {
  return (
  <View className="flex items-center flex-row pt-1 pb-3 pl-1 gap-2 m-3 rounded-xl bg-secondary/40 border-spacing-1 shadow">
      {startIcon}
      <TextInput
        className="flex-1 text-black text-sm items-center"
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        value={value}
        autoCapitalize="none"
        {...props}
      />
      {endIcon}
      <Text className="text-gray-200">{error}</Text>
    </View>
  );
}
