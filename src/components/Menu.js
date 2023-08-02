import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import DishCard from "./DishCard";

const Menu = ({ dishes, restaurantId, restaurantName }) => {
  return (
    <View className="pb-36">
      <FlatList
        data={dishes}
        renderItem={({ item }) => (
          <DishCard
            id={item._id}
            name={item.name}
            description={item.short_description}
            price={item.price}
            imgUrl={item.image}
            restaurantId={restaurantId}
            restaurantName={restaurantName}
          />
        )}
      />
    </View>
  );
};

export default Menu;
