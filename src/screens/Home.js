import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import * as Animatable from "react-native-animatable";

const Home = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFeaturedCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://533smx9g.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27featured%27%5D%7B%0A++...%2C%0A+%0A%7D"
      );
      setFeaturedCategories(response.data.result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const getCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://533smx9g.api.sanity.io/v2021-10-21/data/query/production?query=*%5B+_type+%3D%3D+%22category%22+%5D"
      );
      setCategories(response.data.result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeaturedCategories();
    getCategories();
  }, []);

  return loading ? (
    <View className="flex-1 bg-[#00CCBB] justify-center items-center">
      <Animatable.Image
        source={require("../../assets/loading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-34 "
      />
    </View>
  ) : (
    <SafeAreaView className="flex-1">
      {/* Header */}
      <View className="bg-white">
        <Header />
        {/* Search */}
        <Search />
      </View>

      {/* Body */}

      <ScrollView>
        {/* Categories */}

        <Categories data={categories} />

        {/* Featured  */}

        {featuredCategories.map((category) => {
          return (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
