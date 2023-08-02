import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../context/features/restaurantSlice";
import { resetBasket } from "../context/features/basketSlice";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const dispatch = useDispatch();

  return (
    <View className="flex-1  bg-[#00CCBB] ">
      <SafeAreaView className="mt-6 z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
              dispatch(resetBasket());
            }}
          >
            <XMarkIcon size={30} color="#fff" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 minutes</Text>
            </View>
            <Image
              className="h-20 w-20"
              source={{
                uri: "https://links.papareact.com/fls",
              }}
            />
          </View>
          <Progress.Bar
            progress={0.2}
            width={180}
            indeterminate={true}
            color="#00CCBB"
          />
          <Text className="mt-3  text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        className="flex-1 -mt-10 z-0"
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <View className="bg-white flex-row items-center space-x-5 h-28 px-3">
        <Image
          className="h-12 w-12 bg-gray-300 p-4 rounded-full"
          source={{ uri: "http://links.papareact.com/wru" }}
        />
        <View className="flex-1">
          <Text className="text-lg">Barış Dönmezkılıç</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </View>
    </View>
  );
};

export default DeliveryScreen;
