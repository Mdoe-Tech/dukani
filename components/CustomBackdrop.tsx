import React, { useMemo } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate, useAnimatedProps
} from "react-native-reanimated";
import { BlurView } from "@react-native-community/blur";

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView)
  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "rgba(0,0,0,0.5)",
      },
    ],
    [style]
  );

  return <AnimatedBlurView blurAmount={ interpolate(
    animatedIndex.value,
    [-1, 0],
    [0, 0.5],
    Extrapolate.CLAMP
  )} style={containerStyle}/>;
};

export default CustomBackdrop;
