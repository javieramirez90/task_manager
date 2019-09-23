import React from "react";
import SpringModal from "../../components/UI/Modal/Modal";

const Home = props => {
  return (
    <div>
      <h1>Hello Ironhacker!</h1>
      <h2>Now you have started this adventure,</h2>
      <p>
        remember that time management is the key for success. So we are
        providing you with this powerfull tool. Feel free to use it and enjoy.
      </p>
      <SpringModal props={props} />
    </div>
  );
};

export default Home;
