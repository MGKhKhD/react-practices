import React from "react";
import Layout from "./Components/Layouts/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";

const index = () => {
  return (
    <Layout>
      <h1>Welcome to Foodera</h1>
      <BurgerBuilder />
    </Layout>
  );
};

export default index;
