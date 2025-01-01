import { useContext } from "react";
import { FaHeartCircleMinus, FaHeartCirclePlus } from "react-icons/fa6";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import "./Item.css";

const Item = ({ item }) => {
  const { handleFavotites, favoritesList } = useContext(Context);

  return (
    <div className="card-item">
      <div className="item-image">
        <img src={item.image_url} alt={item.title} />
      </div>
      <p>{item.publisher}</p>
      <h3>{item.title}</h3>
      <div className="icons">
        <button
          className="heart-icon"
          onClick={() => {
            handleFavotites(item);
          }}
        >
          {/* icon changing using findIndex if findIndex === -1 that means the item is not in favorites 
          else means the item in the favorites list  */}
          {favoritesList.findIndex(
            (itemFavorites) => itemFavorites.id === item.id
          ) !== -1 ? (
            <FaHeartCircleMinus className="red" />
          ) : (
            <FaHeartCirclePlus className="green" />
          )}
        </button>
        <button>
          <Link to={`/details/${item.id}`}>
            <BiDetail className="details-icon" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Item;
