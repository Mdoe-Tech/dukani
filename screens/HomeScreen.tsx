import * as React from "react";
import { useCallback, useMemo, useRef } from "react";
import { Image, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import MyText from "../components/MyText";
import Icon from "react-native-vector-icons/Ionicons";
import SearchBar from "../components/SearchBar";
import Collection from "../components/Collection";
import ProductCard from "../components/ProductCard";
import CategoryHeader from "../components/CategoryHeader";
import MasonryList from "@react-native-seoul/masonry-list";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBackdrop from "../components/CustomBackdrop";
import FilterView from "../components/FilterView";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = React.useState("Clothing");
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // callbacks
  const openFilter = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  interface ProductItem {
    id: number;
    name: string;
    image: any; // Adjust the type of 'image' property as per your requirements
    price: string;
    rating: number;
  }

  return (
    <ScrollView style={{ backgroundColor: "#F5F5F5"}}>
      <SafeAreaView style={{ paddingTop: 16 }}>
        <View style={{ flexDirection: "row", paddingHorizontal: 16, alignItems: "center", marginBottom: 16,marginTop:20 }}>
          <Image
            style={{ width: 52, height: 52, borderRadius: 26 }}
            source={require("../assets/images/avatar.png")}
            resizeMode="cover"
          />
          <View style={{ flex: 1, marginLeft: 16 }}>
            <MyText style={{ fontSize: 18, fontWeight: "bold", color: "#FF0000" }} numberOfLines={1}>
              Hi, Issa Mdoe 👋
            </MyText>
            <MyText style={{ opacity: 0.7 }} numberOfLines={2}>Discover fashion that suits your style</MyText>
          </View>
          <TouchableOpacity style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            borderWidth: 2,
            borderColor: "#999",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Icon name="notifications" size={30} color="red" />
          </TouchableOpacity>
        </View>
        <SearchBar handleChange={openFilter}/>
        <Collection />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 24, marginBottom: 16 }}>
          <View style={{ flexDirection: "row", marginBottom: 12 }}>
            <ProductCard
              handlePress={() =>
                navigation.navigate("Details", {
                  id: "1",
                  source: require("../assets/images/shirts.jpeg"),
                  productname:"Shirts"
                })
              }
              source={require("../assets/images/shirts.jpeg")}
              productName="Shirts"
              price="29.99"
              rating={4.5}
              borderRadius={8}
              elevation={2}
            />
            <ProductCard
              handlePress={() =>
                navigation.navigate("Details", {
                  id: "1",
                  source: require("../assets/images/pens.jpg"),
                  productName:"Pens"
                })
              }
              source={require("../assets/images/pens.jpg")}
              productName="Pens"
              price="50"
              rating={4.7}
              borderRadius={8}
              elevation={2}
              style={{ marginLeft: 12 }}
            />
            <ProductCard
              handlePress={() =>
                navigation.navigate("Details", {
                  id: "1",
                  source: require("../assets/images/tshirt.jpeg"),
                  productName:"T-Shirt"
                })
              }
              source={require("../assets/images/tshirt.jpeg")}
              productName="T-Shirt"
              price="29.99"
              rating={4.9}
              borderRadius={8}
              elevation={2}
              style={{ marginLeft: 12 }}
            />
          </View>
        </ScrollView>
        <View style={{margin:24}}>
          <CategoryHeader
            categories={["Clothing", "Shoes", "Accessories", "Sports", "Electronics"]}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
        </View>
        <MasonryList
          data={[
            { id: 1, name: "Shirts 1", image: require("./../assets/images/shirts.jpeg"), price: "$50", rating: 4.7 },
            { id: 2, name: "Jeans 2", image: require("./../assets/images/suits2.jpeg"), price: "$80", rating: 4.2 },
            { id: 3, name: "Pens 3", image: require("./../assets/images/pens.jpg"), price: "$120", rating: 4.9 },
            { id: 4, name: "Shirt 2", image: require("./../assets/images/Mens_Corporate_Shirt_Long_Sleeve_Float_Navy-875x1000.jpg"), price: "$60", rating: 4.5 },
            { id: 5, name: "Shirt 3", image: require("./../assets/images/shirt.jpeg"), price: "$60", rating: 4.5 },
            { id: 6, name: "Suits", image: require("./../assets/images/tshirt.jpeg"), price: "$60", rating: 4.5 },
            { id: 7, name: "Shirts 1", image: require("./../assets/images/jordan.webp"), price: "$50", rating: 4.7 },
            { id: 8, name: "Jeans 2", image: require("./../assets/images/airforce.webp"), price: "$80", rating: 4.8 },
            { id: 9, name: "Pens 3", image: require("./../assets/images/pochi.jpeg"), price: "$120", rating: 5.0 },
            { id: 10, name: "Shirt 2", image: require("./../assets/images/trouser.jpeg"), price: "$60", rating: 4.1 },
            { id: 11, name: "Shirt 3", image: require("./../assets/images/trouser1.jpeg"), price: "$60", rating: 4.6 },
            { id: 12, name: "Suits", image: require("./../assets/images/suits.jpeg"), price: "$60", rating: 4.5 }
          ]}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item,i }:any) => (
            <View>
              <View style={{
                aspectRatio: i === 0 ? 1 : 2 / 3,
                position: "relative",
                overflow: "hidden",
                borderRadius: 24
              }}>
                <ProductCard
                  handlePress={() =>
                    navigation.navigate("Details", {
                      id: item.id,
                      source: item.image,
                      productName:item.name
                    })
                  }
                  source={item.image}
                  productName={item.name}
                  price={item.price}
                  rating={item.rating}
                  borderRadius={8}
                  elevation={2}
                  style={{ marginLeft: 12 }}
                />
              </View>
            </View>
          )}
          onEndReachedThreshold={0.1}
        />
      </SafeAreaView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={['85%']}
        backdropComponent={(props)=><CustomBackdrop {...props}/>}
      >
       <FilterView/>
      </BottomSheetModal>
    </ScrollView>
  );
};
export default HomeScreen;
