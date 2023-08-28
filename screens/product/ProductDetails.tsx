import { Image, ImageSourcePropType, StatusBar, StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import React, { useState } from "react";
import { RootStackScreenProps } from "../../navigation/AppStackNavigator";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import BottomSheet from "@gorhom/bottom-sheet";
import MyText from "../../components/MyText";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];
const DetailsScreen = ({
                         navigation,route
                       }: RootStackScreenProps<"Details">) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const [count, setCount] = useState(1);
  const [size, setSize] = useState(SIZES[0]);
  const {id, source,productName } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={source}
        style={{ flex: 1, width:"100%",height:"100%" }}
        resizeMode="cover"
      />

      <SafeAreaView
        edges={["top"]}
        style={{ position: "absolute", top: 0, left: 0, right: 0 }}
      >
        <StatusBar />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            gap: 8
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff"
            }}
          >
            <Icons name="arrow-left" size={24} color={"#fff"} />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff"
            }}
          >
            <Icons name="cards-heart-outline" size={24} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff"
            }}
          >
            <Icons name="cart-plus" size={24} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <BottomSheet
        detached
        snapPoints={[64, 500]}
        index={0}
        style={{ marginHorizontal: 20 }}
        bottomInset={insets.bottom + 20}
        backgroundStyle={{
          borderRadius: 24,
          backgroundColor: colors.background
        }}
        handleIndicatorStyle={{
          backgroundColor: "#f14747"
        }}
      >
        <View style={{ padding: 16, gap: 16, flex: 1 }}>
          <MyText style={{ fontSize: 20, fontWeight: "600", color: colors.text }}>
            {productName}
          </MyText>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", gap: 2 }}>
                {new Array(5).fill("").map((_, i) => (
                  <Icons
                    key={i}
                    name={i < 3 ? "star" : "star-outline"}
                    color="#facc15"
                    size={20}
                  />
                ))}
              </View>
              <MyText
                style={{
                  fontSize: 14,
                  color: colors.text,
                  opacity: 0.5,
                  marginTop: 4
                }}
              >
                3.0 (250K Reviews)
              </MyText>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                backgroundColor: "#f14747",
                padding: 6,
                borderRadius: 100
              }}
            >
              <TouchableOpacity
                onPress={() => setCount((count) => Math.max(1, count - 1))}
                style={{
                  backgroundColor: colors.card,
                  width: 34,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 34
                }}
              >
                <Icons name="minus" size={20} color={colors.text} />
              </TouchableOpacity>
              <MyText
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.background
                }}
              >
                {count}
              </MyText>
              <TouchableOpacity
                onPress={() => setCount((count) => Math.min(10, count + 1))}
                style={{
                  backgroundColor: colors.card,
                  width: 34,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 34
                }}
              >
                <Icons name="plus" size={20} color={colors.text} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MyText
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.text,
                  textTransform: "uppercase"
                }}
              >
                Model is 6'1'', Size M
              </MyText>
              <MyText style={{ color: colors.text, opacity: 0.5 }}>
                Size guide
              </MyText>
            </View>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 6,
                marginTop: 6
              }}
            >
              {SIZES.map((s, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => setSize(s)}
                  style={{
                    width: 44,
                    height: 44,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: s === size ? "#f14747" : colors.card,
                    borderRadius: 44
                  }}
                >
                  <MyText
                    style={{
                      color: s === size ? colors.card : colors.text,
                      fontWeight: "600",
                      fontSize: 16
                    }}
                  >
                    {s}
                  </MyText>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View>
            <MyText
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 6,
                color: colors.text
              }}
            >
              Description
            </MyText>
            <MyText
              style={{ color: colors.text, opacity: 0.75 }}
              numberOfLines={3}
            >
              Aute magna dolore sint ipsum dolor fugiat. Ad magna ad elit labore
              culpa sunt sint laboris consectetur sunt. Lorem excepteur occaecat
              reprehenderit nostrud culpa ad ex exercitation tempor.
            </MyText>
          </View>

          <View style={{ flex: 1 }} />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <View style={{ flex: 1 }}>
              <MyText
                style={{ color: colors.text, opacity: 0.75, marginBottom: 4 }}
              >
                Total
              </MyText>
              <MyText
                style={{ color: colors.text, fontSize: 18, fontWeight: "600" }}
              >
                ${(25000).toLocaleString()}
              </MyText>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "#f14747",
                height: 64,
                borderRadius: 64,
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                flexDirection: "row",
                padding: 12
              }}
            >
              <MyText
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.background,
                  paddingHorizontal: 16
                }}
              >
                Add to cart
              </MyText>

              <View
                style={{
                  backgroundColor: colors.card,
                  width: 40,
                  aspectRatio: 1,
                  borderRadius: 40,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icons name="arrow-right" size={24} color={colors.text} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default DetailsScreen;
