import { ScrollView, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
const Categories = ({ data }) => {
  return (
    <ScrollView horizontal>
      {/* Category Card */}

      {data.map((category) => {
        return (
          <CategoryCard
            key={category._id}
            id={category._id}
            title={category.name}
            imgUrl={category.image}
          />
        );
      })}
    </ScrollView>
  );
};

export default Categories;
