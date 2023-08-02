import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";

const Search = () => {
  return (
    <View className="flex-row  py-1  px-2 items-center">
      <View className="flex-row flex-1 space-x-5 mb-1 p-2 bg-gray-200 rounded ">
        <MagnifyingGlassIcon size={25} color="#00CCBB" />
        <TextInput className="flex-1" placeholder="Restaurants and cuisines" />
      </View>
      <AdjustmentsHorizontalIcon size={25} color="#00CCBB" />
    </View>
  );
};

export default Search;
