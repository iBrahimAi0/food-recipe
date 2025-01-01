import React, { useContext } from "react";
import { Context } from "../../App";
import "./Home.css";
import Item from "../../Components/Item/Item";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";

const Home = () => {
  const { foodList, loading } = useContext(Context);

  return (
    <div>
      <ImageSlider />
      {loading && <p>Loading Recipes...</p>}
      <div className="card">
        {foodList && foodList.length > 0 ? (
          foodList.map((item, index) => {
            return <Item item={item} key={index} />;
          })
        ) : (
          <h1>Search for a recipe...</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
