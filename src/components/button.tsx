import { TouchableOpacity } from "react-native";

type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
};

export function ButtonComponent({ onPress, children, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      className="bg-primary/60 p-4 w-80 rounded-full mt-10 items-center flex active:bg-secondary/25 shadow"
      onPress={onPress}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}
