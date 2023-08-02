import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../context/features/basketSlice";
import { useNavigation } from "@react-navigation/native";
const BasketIcon = () => {
  const items = useSelector((state) => selectBasketItems(state));

  const totalPrice = useSelector(selectBasketTotal);
  const navigation = useNavigation();

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="flex-row bg-[#00CCBB] py-2 justify-between px-3 mx-5 rounded-md items-center"
      >
        <Text className="text-white bg-gray-500 p-2 font-bold rounded text-lg ">
          {items.length}
        </Text>
        <Text className="text-white font-bold text-lg">View Basket</Text>
        <Text className="text-white font-bold text-lg">
          £{totalPrice.toString().slice(0, 5)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
