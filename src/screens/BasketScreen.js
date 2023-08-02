import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../context/features/basketSlice";
import { selectRestaurant } from "../context/features/restaurantSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import BasketItemCard from "../components/BasketItemCard";
const BasketScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const restaurant = useSelector(selectRestaurant);
  const subTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const deliveryFee = 5.99;
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(Object.values(groupedItems));
  }, [items]);

  return (
    <View className="flex-1 mt-4 bg-gray-200 rounded relative">
      {/* Header */}
      <View className="flex-row p-5 bg-white ">
        <View className="flex-1 items-center">
          <Text className="font-bold text-xl">Basket</Text>
          <Text className=" text-xs text-gray-500">{restaurant.title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="justify-center"
        >
          <XCircleIcon color="#00CCBB" size={35} />
        </TouchableOpacity>
      </View>

      {/* Delivery Info */}
      <View className="flex-row justify-between w-full p-3 items-center my-4 bg-white ">
        <Image
          className="h-9 w-9 bg-gray-300 p-4 rounded-full "
          source={{ uri: "http://links.papareact.com/wru" }}
        />
        <Text className="mx-20">Deliver in 50-75 min</Text>
        <TouchableOpacity className="flex-1">
          <Text>Change</Text>
        </TouchableOpacity>
      </View>

      {/* Items */}
      <View className="my-2 h-3/6">
        <FlatList
          data={groupedItemsInBasket}
          renderItem={({ item }) => {
            return (
              <BasketItemCard
                img={item[0].imgUrl}
                name={item[0].name}
                quantity={item.length}
                price={item[0].price}
                id={item[0].id}
              />
            );
          }}
        />
      </View>

      {/* Total */}
      <View className="absolute bottom-0 w-full bg-white p-5 h-48 ">
        <View className="flex-row items-center">
          <Text className="flex-1 text-gray-500">Subtotal</Text>
          <Text className="text-gray-500">
            £{subTotal.toString().slice(0, 5)}
          </Text>
        </View>
        <View className="flex-row items-center my-3">
          <Text className="flex-1 text-gray-500">Deliver Fee</Text>
          <Text className="text-gray-500">£{deliveryFee}</Text>
        </View>
        <View className="flex-row items-center my-3">
          <Text className="flex-1 font-bold">Order Total</Text>
          <Text className=" font-bold">
            £{(subTotal + deliveryFee).toString().slice(0, 5)}
          </Text>
        </View>
        {/* Order Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("PreparingOrder")}
          className="bg-[#00CCBB] p-4 rounded-lg items-center"
        >
          <Text className="font-bold text-white ">Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketScreen;
