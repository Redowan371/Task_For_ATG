import React from "react";
import Post from "../../Post/Post";
import MenuBar from "../../Shared/MenuBar/MenuBar";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <MenuBar />
      <Banner />
      <Post />
    </div>
  );
};

export default Home;
