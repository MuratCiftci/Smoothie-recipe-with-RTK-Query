import React from "react";
import Hero from "../../components/Hero/Hero";
import Recipes from "../../components/Recipes/Recipes";

const Home = () => {
  return (
    <>
      <Hero />
      <Recipes title="Popular" />
      <Recipes title="Latest" />
    </>
  );
};

export default Home;
