import React from "react";
import { Text, TextProps } from "react-native";

const MyText: React.FC<TextProps> = (props) => {
  return (
    <Text {...props} style={[{ fontFamily:"RobotoMono-Regular" }, props.style]}>
      {props.children}
    </Text>
  );
};

export default MyText;
