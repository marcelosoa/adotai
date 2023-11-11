import { TextInput, View } from "react-native";
import { InputComponent } from "./input";
import { useState } from "react";

type SearchProps = {
  placeholder: string
  onChangeText: (value: string) => void
  value: string
}

export function SearchComponent ({ placeholder, onChangeText, value }: SearchProps) {
  return (
    <View className="mt-12 items-center justify-between w-full flex-row">
      <InputComponent
        placeholderTextColor={'#fff'}
        disabled={false}
        onChangeText={onChangeText}
        secureTextEntry={false}
        value={value}
        placeholder={placeholder}
      />
    </View>
  )
}