import React from "react";
import { TouchableOpacity, View } from "react-native";
import MyText from "./MyText";

const Collection=()=>{
  return(
    <View className="flex-row justify-between items-center px-6 mt-8">
      <MyText className="text-2xl font-bold">New Collection</MyText>
      <TouchableOpacity>
        <MyText className="text-1xl font-semi-bold">See All</MyText>
      </TouchableOpacity>
    </View>
  )
}

export default Collection;
