import React from "react";
import Countries from "../components/Countries/Countries";
import Navigation from "../components/Navigation/Navigation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.main
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation />
      <Countries />
    </motion.main>
  );
};

export default Home;
