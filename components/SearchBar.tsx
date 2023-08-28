import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MyText from "./MyText";

interface SearchBarProps{
  handleChange:any
}

const SearchBar:React.FC<SearchBarProps> = ({handleChange}) => {
  return (
    <View className="flex-row px-6 gap-4 mt-4 mb-4">
      <TouchableOpacity
        className="flex-1 flex-row h-14 items-center rounded-full border-gray-400 border-2 px-4 space-x-4"
      >
        <Icon
          name="search"
          size={30}
          color="red"
        />
        <MyText className="text-xl flex-1">Search</MyText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleChange}
        style={{aspectRatio:1}}
        className="w-14 rounded-full bg-red-500 items-center justify-center"
      >
        <MaterialCommunityIcon
          name="tune"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}

export default SearchBar;
