import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);
  return (
    <View className="flex-1 bg-[#00CCBB] justify-center items-center">
      <Animatable.Image
        source={require("../../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-34 "
      />
      <Text className="font-bold text-lg my-4 text-white">
        Waiting for Restaurant to accept your order!
      </Text>
      <Animatable.Image
        source={require("../../assets/loading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-34 "
      />
    </View>
  );
};

export default PreparingOrderScreen;
