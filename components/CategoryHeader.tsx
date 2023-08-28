import React from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle, FlatList } from "react-native";
import MyText from "./MyText";

interface CategoryHeaderProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  style?: ViewStyle;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ categories, selectedCategory, onCategorySelect, style }) => {
  const renderCategory = ({ item }: { item: string }) => {
    const isSelected = item === selectedCategory;

    return (
      <TouchableOpacity
        style={[
          styles.tab,
          isSelected && styles.tabSelected,
          { marginLeft: item === categories[0] ? 0 : 15 }, // Add margin only to tabs except the first one
        ]}
        onPress={() => onCategorySelect(item)}
      >
        <MyText style={[styles.tabText, isSelected ? styles.tabTextSelected : styles.tabTextNotSelected]}>
          {item}
        </MyText>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={categories}
      renderItem={renderCategory}
      keyExtractor={(item) => item}
      horizontal
      showsHorizontalScrollIndicator={false}
    />

  );
};

const styles = StyleSheet.create({
  tab: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowOffset: {
      width: 4,
      height: 6
    },
    // shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: "#fff",
  },
  tabSelected: {
    backgroundColor: "#f14747",
  },
  tabText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  tabTextSelected: {
    color: "#fff",
  },
  tabTextNotSelected: {
    color: "#000",
  },
});

export default CategoryHeader;
