import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sure.scss";

type Props = {};

const Sure = (props: Props) => {
  const navigate = useNavigate();
  const [direction, setDirection] = useState("-100%");

  return (
    <motion.main
      className="main__container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: direction, opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="homeContainer">
        <div>
          <h1>Are you sure ?</h1>
          <button
            onClick={() => {
              setDirection("100%");
              navigate("/");
            }}
            className="noButton button"
          >
            No
          </button>
          <button
            onClick={() => {
              setDirection("-100%");
              navigate("/question/0");
            }}
            className="button"
          >
            Yes
          </button>
        </div>
      </div>
    </motion.main>
  );
};

export default Sure;
