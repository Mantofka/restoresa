import React from "react";
import { motion } from "framer-motion";

import { yellowColor } from "../../utils/styles/styles";

const loadingContainer = {
  width: "4.5rem",
  display: "flex",
  justifyContent: "space-around",
};
const loadingCircle = {
  display: "block",
  width: "1.2rem",
  height: "1.2rem",
  backgroundColor: yellowColor,
  borderRadius: "0.6rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
      repeat: Infinity,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
      repeat: Infinity,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: ["0%", "20%", "0%"],
  },
};
const loadingCircleTransition = {
  duration: 0.8,
  repeat: Infinity,
  ease: "easeInOut",
};

const Loader = () => {
  return (
    <div>
      <div className='fixed  w-full min-h-screen z-50 bg-black opacity-30' />
      <div className='flex fixed w-full justify-center items-center h-screen'>
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          transition={loadingCircleTransition}
          initial='start'
          animate='end'
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
