import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MyText from "./MyText";

interface ProductCardProps {
  source: ImageSourcePropType;
  productName: string;
  price: string;
  rating: number;
  borderRadius?: number;
  elevation?: number;
  style?: StyleProp<ViewStyle>;
  handlePress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ source, productName, price, rating, borderRadius, elevation, style,handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.container, style, { borderRadius, elevation }]}>
      <Image source={source} resizeMode="cover" style={styles.image} />
      <View style={styles.ratingContainer}>
        <Icon name="star" size={18} color="gold" />
        <MyText style={styles.rating}>{rating}</MyText>
      </View>
      <View style={styles.content}>
        <View style={styles.productPrice}>
          <MyText style={styles.productName}>{productName}</MyText>
          <MyText style={styles.price}>${price}</MyText>
        </View>
        <View style={styles.addToCartFavoriteContainer}>
          <TouchableOpacity style={styles.addToCartButton}>
            <Icon name="cart-outline" size={20} color="#fff" />
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteButton}>
            <Icon name="heart" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    marginTop: 15,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 50,
    elevation: 4,
    width: 200, // Increase the width as desired
    marginRight: 12, // Add spacing between the cards
  },
  image: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  ratingContainer: {
    position: "absolute",
    top: 8,
    right: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 20,
  },
  rating: {
    fontSize: 12,
    marginLeft: 2,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    padding: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  price: {
    fontSize: 16,
    color: "#666",
    fontWeight: "bold",
  },
  addToCartFavoriteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  addToCartButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f14747",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  favoriteButton: {
    backgroundColor: "#f14747",
    borderRadius: 20,
    padding: 8,
    marginLeft: 8,
  },
  addToCartText: {
    marginLeft: 4,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  productPrice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ProductCard;
