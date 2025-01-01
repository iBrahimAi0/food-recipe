import React, { useContext } from "react";
import Item from "../../Components/Item/Item";
import { Context } from "../../App";

const Favorites = () => {
  const { favoritesList } = useContext(Context);

  return (
    <div>
      <div className="card">
        {favoritesList && favoritesList.length > 0 ? (
          favoritesList.map((item, index) => {
            return <Item item={item} key={index} />;
          })
        ) : (
          <h1>You haven't added anything.</h1>
        )}
      </div>
    </div>
  );
};

export default Favorites;
