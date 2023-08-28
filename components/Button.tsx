import React from "react";
import { Text, TouchableOpacity, Platform } from "react-native";

interface ButtonProps {
  handlePress: any;
  text: string;
}

const Button: React.FC<ButtonProps> = ({handlePress, text }) => {

  const buttonStyle = Platform.select({
    ios: 'flex justify-center p-4 m-4 items-center bg-red-500 w-80 rounded-lg shadow-md',
    android: 'flex justify-center p-4 m-4 items-center bg-blue-500 w-80',
  });

  const textStyle = Platform.select({
    ios: 'text-white text-lg',
    android: 'text-white',
  });

  return (
    <TouchableOpacity className={buttonStyle} onPress={handlePress}>
      <Text className={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
