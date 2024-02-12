

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Wrapper = ({ children }) => {
    const { ref, inView } = useInView();

  return (
    <div ref={ref} >
      {inView && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default Wrapper;
