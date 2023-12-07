import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();

  return (
    <motion.main
      className="main__container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="homeContainer diraction">
        <h1>
          Welcome to Math Quiz <br /> Do you want to test your skills?
        </h1>
        <h5>
          Math can be dangerous to your health and nerves, think carefully about
          whether you want to continue.
        </h5>
        <button
          onClick={() => {
            navigate("/sure");
          }}
          className="button buttonMargin"
        >
          Let's go!
        </button>
      </div>
    </motion.main>
  );
};

export default Home;
